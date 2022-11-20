import { useState, useEffect, useRef } from "react";
import ShortenedLink from "../ShortenedLink/ShortenedLink";
import image from "../../assets/images/bg-shorten-desktop.svg";

const Shortening = () => {
  const [userInput, setUserInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState([]);
  const [originalLink, setOriginalLink] = useState([]);
  const [isErorr, setIsErorr] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const shortenedLinkItems = localStorage.getItem("shortenedLink")
      ? JSON.parse(localStorage.getItem("shortenedLink"))
      : [];

    const originalLinkItems = localStorage.getItem("originalLink")
      ? JSON.parse(localStorage.getItem("originalLink"))
      : [];
    setShortenedLink(shortenedLinkItems);
    setOriginalLink(originalLinkItems);
  }, []);

  const handlError = () => {
    inputRef.current.focus();
  };

  async function requestShortUrl() {
    try {
      const res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      const json = await res.json();
      setShortenedLink([...shortenedLink, json.result.short_link]);
      setOriginalLink([...originalLink, json.result.original_link]);
      localStorage.setItem(
        "shortenedLink",
        JSON.stringify([...shortenedLink, json.result.short_link])
      );
      localStorage.setItem(
        "originalLink",
        JSON.stringify([...originalLink, json.result.original_link])
      );
    } catch (e) {
      setIsErorr(true);
      handlError();
    }
  }
  return (
    <div className="container col-xxl-8 px-4 py-5 text-center shortening">
      <div
        className="row g-3 needs-validation justify-content-md-center align-items-center shortening__form"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-md-6 position-relative">
          <input
            type="text"
            className="form-control"
            id="validationTooltip03"
            placeholder="shorten a link here..."
            value={userInput}
            ref={inputRef}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            style={{
              borderColor: isErorr ? "red" : "none",
            }}
            required
          />
          <div
            className="invalid-tooltip"
            style={{
              display: isErorr ? "block" : "none",
            }}
          >
            {userInput != "" ? "please add a valid link." : "please add a link"}
          </div>
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary"
            onClick={() => {
              if (userInput) {
                requestShortUrl();
              } else {
                setIsErorr(true);
                console.log("it's workong fine");
                handlError();
              }
            }}
          >
            Shorten It!
          </button>
        </div>
      </div>
      {shortenedLink.map((element, index) => {
        return (
          <ShortenedLink
            key={index}
            index={index}
            originalLinkProps={originalLink}
            shortenedLinkProps={element}
          />
        );
      })}
    </div>
  );
};
export default Shortening;

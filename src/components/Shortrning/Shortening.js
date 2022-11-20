import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import changeUserInput from "../../actionCreators/changeUserInput";
import ChangeShortenedlink from "../../actionCreators/ChangeShortenedlink";
import changeOriginaLlink from "../../actionCreators/changeOriginaLlink";
import changeIsErorr from "../../actionCreators/changeIsErorr";
import ShortenedLinkCard from "../ShortenedLinkCard/ShortenedLinkCard";

const Shortening = () => {
  const userInput = useSelector((state) => state.userInput);
  const shortenedLink = useSelector((state) => state.shortenedLink);
  const originalLink = useSelector((state) => state.originalLink);
  const isErorr = useSelector((state) => state.isErorr);
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    const shortenedLinkItems = localStorage.getItem("shortenedLink")
      ? JSON.parse(localStorage.getItem("shortenedLink"))
      : [];

    const originalLinkItems = localStorage.getItem("originalLink")
      ? JSON.parse(localStorage.getItem("originalLink"))
      : [];
    dispatch(ChangeShortenedlink(shortenedLinkItems));
    dispatch(changeOriginaLlink(originalLinkItems));
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
      dispatch(ChangeShortenedlink([...shortenedLink, json.result.short_link]));
      dispatch(
        changeOriginaLlink([...originalLink, json.result.original_link])
      );
      localStorage.setItem(
        "shortenedLink",
        JSON.stringify([...shortenedLink, json.result.short_link])
      );
      localStorage.setItem(
        "originalLink",
        JSON.stringify([...originalLink, json.result.original_link])
      );
      dispatch(changeUserInput(""));
    } catch (e) {
      dispatch(changeIsErorr(true));
      handlError();
    }
  }
  return (
    <div className="container col-xxl-8  text-center shortening ">
      <div className="row g-3 needs-validation justify-content-md-center align-items-center shortening__form ">
        <div className="col-md-6 position-relative">
          <input
            type="text"
            className="form-control"
            id="validationTooltip03"
            placeholder="shorten a link here..."
            value={userInput}
            ref={inputRef}
            onChange={(e) => dispatch(changeUserInput(e.target.value))}
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
                dispatch(changeIsErorr(true));
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
          <ShortenedLinkCard
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

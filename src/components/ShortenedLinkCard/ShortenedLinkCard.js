import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ShortenedLinkCard = (props) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div
      key={props.index}
      className="d-flex  mt-3 align-items-baseline shortening__links "
    >
      <div className="me-auto p-2 shortening__links--original">
        <a href={props.originalLinkProps[props.index]}>
          {props.originalLinkProps[props.index]}
        </a>
      </div>
      <div className="p-2 shortening__links--link">
        <a href={props.shortenedLinkProps}>{props.shortenedLinkProps}</a>
      </div>
      <div className="p-2 btn-container">
        {" "}
        <CopyToClipboard text={props.shortenedLinkProps} key={props.index * 2}>
          <button
            className={isCopied ? "btn btn-primary active " : "btn btn-primary"}
            onClick={() => {
              setIsCopied(true);
            }}
          >
            {isCopied ? "Copied" : "copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
export default ShortenedLinkCard;

import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ShortenedLink = (props) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div
      key={props.index}
      className="d-flex mb-3 mt-4 align-items-baseline shortening__links "
    >
      <div className="me-auto p-2">{props.originalLinkProps[props.index]}</div>
      <div className="p-2 shortening__links--link">
        {props.shortenedLinkProps}
      </div>
      <div className="p-2">
        {" "}
        <CopyToClipboard text={props.shortenedLinkProps} key={props.index * 2}>
          <button
            className="btn btn-primary"
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
export default ShortenedLink;

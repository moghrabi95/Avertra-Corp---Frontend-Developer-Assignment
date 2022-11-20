import { combineReducers } from "redux";
import userInput from "./userInput";
import shortenedLink from "./shortenedLink";
import originalLink from "./originalLink";
import isErorr from "./isErorr";
export default combineReducers({
  userInput,
  shortenedLink,
  originalLink,
  isErorr,
});

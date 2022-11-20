export default function shortenedLink(state = [], action) {
  switch (action.type) {
    case "CHANGE_SHORTENEDLINK":
      return action.payload;
    default:
      return state;
  }
}

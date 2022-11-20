export default function originalLink(state = [], action) {
  switch (action.type) {
    case "CHANGE_ORIGINALLINK":
      return action.payload;
    default:
      return state;
  }
}

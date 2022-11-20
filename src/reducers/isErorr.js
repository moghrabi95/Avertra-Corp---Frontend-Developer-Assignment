export default function isErorr(state = false, action) {
  switch (action.type) {
    case "CHANGE_ISERORR":
      return action.payload;
    default:
      return state;
  }
}

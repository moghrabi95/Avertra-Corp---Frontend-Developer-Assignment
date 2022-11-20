export default function userInput(state = "", action) {
  switch (action.type) {
    case "CHANGE_USERINPUT":
      return action.payload;
    default:
      return state;
  }
}

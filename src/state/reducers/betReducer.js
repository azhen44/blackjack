const reducer = (state = 0, action) => {
  switch (action.type) {
    case "increaseBet":
      return state + action.payload
    case "decreaseBet":
      return state - action.payload
    default:
      return state
  }
}

export default reducer;
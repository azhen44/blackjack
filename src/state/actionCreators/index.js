// can split it into seperate files too

export const increaseBalance = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "increase",
      payload: amount      
    })
  }
}

export const decreaseBalance = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "decrease",
      payload: amount      
    })
  }
}

export const increaseBet = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "increaseBet",
      payload: amount      
    })
  }
}

export const decreaseBet = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "decreaseBet",
      payload: amount      
    })
  }
}
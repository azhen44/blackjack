// combine all reducers

import {combineReducers} from "redux"
import balanceReducer from "./balanceReducer"
import betReducer from "./betReducer"

const reducers = combineReducers({
  balance : balanceReducer,
  bet : betReducer
})

export default reducers;
// combine all reducers

import {combineReducers} from "redux"
import balanceReducer from "./balanceReducer"

const reducers = combineReducers({
  balance : balanceReducer
})

export default reducers;
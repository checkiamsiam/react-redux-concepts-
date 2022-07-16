import { combineReducers } from "redux";
import { counterReducer } from "./CounterReducer";
import { fetchTodoReducer } from "./fetchTodoReducer";

const rootReducer = combineReducers({
  counterReducer , fetchTodoReducer
})

export default rootReducer ;
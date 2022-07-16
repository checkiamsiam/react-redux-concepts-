import { createStore } from "redux";
import rootReducer from "./StateManagement/Reducers/rootReducer";

const store = createStore(rootReducer)

export default store ;
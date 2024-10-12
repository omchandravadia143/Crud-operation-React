import { rootReducer } from "./Reducers";
import { createStore } from "redux";

const store = createStore(rootReducer);
export { store };
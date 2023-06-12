import { createStore } from "redux";
import saveUserReducer from "../reducers/userReducer";

const store = createStore(saveUserReducer);

export default store;

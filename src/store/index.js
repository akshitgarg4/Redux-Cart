import { createStore } from "redux";
import rootReducer from "../reducers";
let store;
export function configureStore() {
  store = createStore(rootReducer);
  return store;
}

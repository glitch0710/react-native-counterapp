import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducers from "./reducers/counterReducers";

const rootReducer = combineReducers({
  count: counterReducers,
});

export const store = createStore(rootReducer);

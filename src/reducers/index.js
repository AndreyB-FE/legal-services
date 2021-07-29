import orderCallReducer from "./orderCallReducer";
import asideWindowReducer from "./asideWindowReducer";

import { combineReducers } from "redux";

const setAllReducers = combineReducers({
  orderCallReducer,
  asideWindowReducer,
});

export default setAllReducers;

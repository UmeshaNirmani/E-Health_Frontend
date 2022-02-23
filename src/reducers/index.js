import { combineReducers } from "redux";
import auth from "./auth";
import foodtable from "./foodtable";

export const reducers = combineReducers({
  auth,
  foodtable,
});

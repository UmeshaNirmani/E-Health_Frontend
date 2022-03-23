import { combineReducers } from "redux";
import auth from "./auth";
import foodtable from "./foodtable";
import caloriecalculator from "./caloriecalculator";

export const reducers = combineReducers({
  auth,
  foodtable,
  caloriecalculator,
});

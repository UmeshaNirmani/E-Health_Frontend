import { combineReducers } from "redux";
import auth from "./auth";
import foodtable from "./foodtable";
import caloriecalculator from "./caloriecalculator";
import fooddiary from "./fooddiary";

export const reducers = combineReducers({
  auth,
  foodtable,
  caloriecalculator,
  fooddiary,
});

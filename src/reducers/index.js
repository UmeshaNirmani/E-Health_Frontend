import { combineReducers } from "redux";
import auth from "./auth";
import foodtable from "./foodtable";
import caloriecalculator from "./caloriecalculator";
import fooddiary from "./fooddiary";
import medicalhistory from "./medicalhistory";
import graphs from "./graphs";
import chat from "./chat";

export const reducers = combineReducers({
  auth,
  foodtable,
  caloriecalculator,
  fooddiary,
  medicalhistory,
  graphs,
  chat,
});

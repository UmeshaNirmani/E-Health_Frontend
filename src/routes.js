// this page gives sidebar navlinks

import CalorieCalculator from "pages/CalorieCalculator";
import MyFoodDiary from "pages/MyFoodDiary";
import MyProgress from "pages/MyProgress";
import MyDoctor from "pages/MyDoctor";
import MyCommunity from "pages/MyCommunity";
import Profile from "pages/Profile.js";
import MyMedicalHistory from "pages/MyMedicalHistory";
import Logout from "pages/Login";
//import Dashboard from "pages/Dashboard";
import MyPatients from "pages/MyPatients";
import PGC from "pages/PGC";
import Users from "pages/Users";
import FoodTable from "pages/FoodTable";

let routes = [
  {
    path: "/calorieCalculator",
    name: "Calorie Calculator",
    icon: "ni ni-ruler-pencil text-green",
    component: CalorieCalculator,
    layout: "/user",
  },
  {
    path: "/myfooddiary",
    name: "My Food Diary",
    icon: "ni ni-book-bookmark text-blue",
    component: MyFoodDiary,
    layout: "/user",
  },
  {
    path: "/myprogress",
    name: "My Progress",
    icon: "ni ni-chart-bar-32 text-yellow",
    component: MyProgress,
    layout: "/user",
  },
  {
    path: "/mydoctor",
    name: "My Doctor",
    icon: "ni ni-single-02 text-red",
    component: MyDoctor,
    layout: "/user",
  },
  {
    path: "/mycommunity",
    name: "My Community",
    icon: "ni ni-chat-round text-green",
    component: MyCommunity,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "ni ni-single-copy-04 text-blue",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/mymedicalhistory",
    name: "My Medical History",
    icon: "ni ni-sound-wave text-red",
    component: MyMedicalHistory,
    layout: "/user",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-green",
    component: Logout, // should be correct
    layout: "/public",
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "ni ni-bullet-list-67 text-blue",
  //   component: Dashboard,
  //   layout: "/user",
  // },
  {
    path: "/mypatients",
    name: "My Patients",
    icon: "ni ni-single-02 text-yellow",
    component: MyPatients,
    layout: "/user",
  },
  {
    path: "/pgc",
    name: "Peer Groups",
    icon: "ni ni-world-2 text-red",
    component: PGC,
    layout: "/user",
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-single-02 text-green",
    component: Users,
    layout: "/user",
  },
  {
    path: "/foodtable",
    name: "Food Table",
    icon: "ni ni-collection text-blue",
    component: FoodTable,
    layout: "/user",
  },
];

export default routes;

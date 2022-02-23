// this page gives sidebar navlinks

import CalorieCalculator from "pages/patient/CalorieCalculator";
import MyFoodDiary from "pages/patient/MyFoodDiary";
import MyProgress from "pages/patient/MyProgress";
import MyDoctor from "pages/patient/MyDoctor";
import MyCommunity from "pages/patient/MyCommunity";
import Profile from "pages/Profile.js";
import MyMedicalHistory from "pages/patient/MyMedicalHistory";
import Logout from "pages/Login";
//import Dashboard from "pages/Dashboard";
import MyPatients from "pages/doctor/MyPatients";
import PGC from "pages/doctor/PGC";
import Users from "pages/admin/Users";
import FoodTable from "pages/admin/FoodTable";
import FoodTableCreate from "pages/admin/FoodTable_Create";

let routes = [
  {
    path: "/calorieCalculator",
    name: "Calorie Calculator",
    icon: "ni ni-ruler-pencil text-green",
    componentPage: CalorieCalculator,
    layout: "/user",
  },
  {
    path: "/myfooddiary",
    name: "My Food Diary",
    icon: "ni ni-book-bookmark text-blue",
    componentPage: MyFoodDiary,
    layout: "/user",
  },
  {
    path: "/myprogress",
    name: "My Progress",
    icon: "ni ni-chart-bar-32 text-yellow",
    componentPage: MyProgress,
    layout: "/user",
  },
  {
    path: "/mydoctor",
    name: "My Doctor",
    icon: "ni ni-single-02 text-red",
    componentPage: MyDoctor,
    layout: "/user",
  },
  {
    path: "/mycommunity",
    name: "My Community",
    icon: "ni ni-chat-round text-green",
    componentPage: MyCommunity,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "ni ni-single-copy-04 text-blue",
    componentPage: Profile,
    layout: "/user",
  },
  {
    path: "/mymedicalhistory",
    name: "My Medical History",
    icon: "ni ni-sound-wave text-red",
    componentPage: MyMedicalHistory,
    layout: "/user",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-green",
    componentPage: Logout, // should be correct
    layout: "/public",
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "ni ni-bullet-list-67 text-blue",
  //   componentPage: Dashboard,
  //   layout: "/user",
  // },
  {
    path: "/mypatients",
    name: "My Patients",
    icon: "ni ni-single-02 text-yellow",
    componentPage: MyPatients,
    layout: "/user",
  },
  {
    path: "/pgc",
    name: "Peer Groups",
    icon: "ni ni-world-2 text-red",
    componentPage: PGC,
    layout: "/user",
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-single-02 text-green",
    componentPage: Users,
    layout: "/user",
  },
  {
    path: "/foodtable",
    name: "Food Table",
    icon: "ni ni-collection text-blue",
    componentPage: FoodTable,
    layout: "/user",
  },
  // {
  //   path: "/foodtable_create",
  //   name: "Food Table Create",
  //   icon: "ni ni-collection text-blue",
  //   componentPage: FoodTableCreate,
  //   layout: "/user",
  // },
];

export default routes;

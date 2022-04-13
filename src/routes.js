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
//import FoodTableCreate from "pages/admin/FoodTable_Create";

let currentUser = localStorage.getItem("userProfile");
console.log("#####userProfile: ", currentUser);
let jUser = JSON.parse(currentUser);
console.log("jUser: ", jUser);

let uRole =
  currentUser && currentUser !== null && jUser && jUser.Role
    ? jUser.Role
    : "NONE"; //none should redirect to login

console.log("uRole: ", uRole);

const adminRoutes = [
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
  {
    path: "/profile",
    name: "My Profile",
    icon: "ni ni-single-copy-04 text-yellow",
    component: Profile,
    layout: "/user",
  },
  // {
  //   path: "/login",
  //   name: "Logout",
  //   icon: "ni ni-button-power text-red",
  //   component: Logout,
  //   layout: "/public",
  // },
];

const doctorRoutes = [
  {
    path: "/mypatients",
    name: "My Patients",
    icon: "ni ni-single-02 text-green",
    component: MyPatients,
    layout: "/user",
  },
  {
    path: "/pgc",
    name: "Peer Groups",
    icon: "ni ni-world-2 text-blue",
    component: PGC,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "ni ni-single-copy-04 text-yellow",
    component: Profile,
    layout: "/user",
  },
  // {
  //   path: "/login",
  //   name: "Logout",
  //   icon: "ni ni-button-power text-red",
  //   component: Logout,
  //   layout: "/public",
  // },
];

const patientRoutes = [
  {
    path: "/caloriecalculator",
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
    path: "/mymedicalhistory",
    name: "My Medical History",
    icon: "ni ni-sound-wave text-red",
    component: MyMedicalHistory,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "ni ni-single-copy-04 text-green",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/mydoctor",
    name: "My Doctor",
    icon: "ni ni-single-02 text-blue",
    component: MyDoctor,
    layout: "/user",
  },
  {
    path: "/mycommunity",
    name: "My Community",
    icon: "ni ni-chat-round text-yellow",
    component: MyCommunity,
    layout: "/user",
  },
  {
    path: "/foodtable",
    name: "Food Table",
    icon: "ni ni-collection text-blue",
    component: FoodTable,
    layout: "/user",
  },
  // {
  //   path: "/login",
  //   name: "Logout",
  //   icon: "ni ni-button-power text-red",
  //   component: Logout,
  //   layout: "/public",
  // },
];

//const userRole = "ADMIN"; // ["ADMIN", "DOCTOR", "PATIENT"]
// let currentUser = localStorage.getItem("accessToken");
// console.log("currentUser", currentUser);
// let userRole;
// if (currentUser.Role === "Patient") {
//   userRole = patientRoutes;
// }
// if (currentUser.Role === "Doctor") {
//   userRole = doctorRoutes;
// }
// if (currentUser.Role === "System Administrator") {
//   userRole = adminRoutes;
// }
// let routes = userRole; // savedUserRole

const noneRoutes = [
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-red",
    component: Logout,
    layout: "/public",
  },
];

export const routes =
  uRole === "System Administrator"
    ? adminRoutes
    : uRole === "Doctor"
    ? doctorRoutes
    : uRole === "Patient"
    ? patientRoutes
    : noneRoutes;

export default routes;

// this page gives sidebar navlinks

import Profile from "views/pages/Profile.js";
import Landing from "views/pages/Landing";
import Login from "views/pages/Login";
import CalorieCalculator from "views/pages/CalorieCalculator";
import Index from "views/index";

var routes = [
  {
    path: "/calorieCalculator",
    name: "Calorie Calculator",
    icon: "ni ni-ruler-pencil text-green",
    component: CalorieCalculator,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Food Diary",
    icon: "ni ni-book-bookmark text-blue",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Doctor",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Community",
    icon: "ni ni-chat-round text-red",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "ni ni-single-copy-04 text-black",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/profile",
    name: "My Medical History",
    icon: "ni ni-sound-wave text-red",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-green",
    component: Login, // should be correct
    layout: "/public",
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
    layout: "/user",
  },
];
export default routes;

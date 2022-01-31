/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// this page gives sidebar navlinks
import Profile from "views/pages/Profile.js";
import Landing from "views/pages/Landing.js";

var routes = [
  {
    path: "/profile",
    name: "Calorie Calculator",
    icon: "ni ni-ruler-pencil text-green",
    component: Profile,
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
    path: "/landing",
    name: "Logout",
    icon: "ni ni-button-power text-green",
    component: Landing, // should be correct
    layout: "/public",
  },
];
export default routes;

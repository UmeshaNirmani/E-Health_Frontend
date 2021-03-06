import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import LandingNavbar from "components/Navbars/LandingNavbar";
import Footer from "components/Footers/Footer";

import Welcome from "pages/Landing";
import UserLogin from "pages/Login";

const Landing = (props) => {
  useEffect(() => {
    // remove user profile
    localStorage.setItem("userProfile", JSON.stringify({}));
    // remove access token
    localStorage.setItem("accessToken", "");
  }, []);

  return (
    <>
      <LandingNavbar />
      <Switch>
        <Route path="/public/landing" component={Welcome} />
        <Route path="/public/login" component={UserLogin} />
        <Redirect from="*" to="/public/landing" />
      </Switch>
      <Footer />
    </>
  );
};

export default Landing;

import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import LandingNavbar from "components/Navbars/LandingNavbar";
import Footer from "components/Footers/Footer";

import Register from "pages/Register";

const Landing = (props) => {
  return (
    <>
      <LandingNavbar />
      <Switch>
        <Route path="/auth/register" component={Register} />
        <Redirect from="*" to="/auth/register" />
      </Switch>
      <Footer />
    </>
  );
};

export default Landing;

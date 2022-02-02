import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import LandingNavbar from "components/Navbars/LandingNavbar";
import Footer from "components/Footers/Footer";

import Welcome from "views/pages/Landing";
import UserLogin from "views/pages/Login";

const Landing = (props) => {
  const mainContent = React.useRef(null);

  return (
    <>
      <LandingNavbar />
      <div className="main-content" ref={mainContent}>
        <Switch>
          <Route path="/public/login" component={UserLogin} />
          <Route path="/public/landing" component={Welcome} />
          <Redirect from="*" to="/public/landing" />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default Landing;

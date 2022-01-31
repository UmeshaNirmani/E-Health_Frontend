import React, { useEffect, useState } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import LandingNavbar from "components/Navbars/LandingNavbar";
import Footer from "components/Footers/Footer";

import Welcome from "views/pages/Landing";
import UserLogin from "views/pages/Login";

import routes from "routes.js";

const Landing = (props) => {
  const mainContent = React.useRef(null);

  useEffect(() => {}, []);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      // {console.log(">>>>>>>>> ", prop)}
      if (prop.layout === "/public") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <LandingNavbar />
      <div className="main-content" ref={mainContent}>
        <Switch>
          <Route path="/public/login" component={UserLogin} />
          <Route path="/public/landing" component={Welcome} />
          <Redirect from="*" to="/public/landing" />
        </Switch>
        <Container fluid>
          <Footer />
        </Container>
      </div>
    </>
  );
};

export default Landing;

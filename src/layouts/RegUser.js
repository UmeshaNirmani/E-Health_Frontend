import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// core components
import UserNavbar from "components/Navbars/UserNavbar.js";
import Footer from "components/Footers/Footer";
import Sidebar from "components/Sidebar/Sidebar.js";
import Header from "components/Headers/Header";

import routes from "routes.js";

const RegUser = (props) => {
  const mainContent = React.useRef(null);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/user") {
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

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        props.location.pathname.indexOf(routes[i].layout + routes[i].path) !==
        -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/user",
          imgSrc: require("../assets/img/brand/img_logo.png").default,
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <Header />
        <UserNavbar
          {...props}
          brandText={getBrandText(props.location.pathname)}
        />
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/user/caloriecalculator" />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default RegUser;

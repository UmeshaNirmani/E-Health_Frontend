import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import Register from "../src/views/pages/Register";

import RegUserLayout from "layouts/RegUser.js";
import LandingLayout from "layouts/Landing.js";

import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducers } from "reducers";

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          path="/public"
          render={(props) => <LandingLayout {...props} />}
        />
        <Route path="/user" render={(props) => <RegUserLayout {...props} />} />
        <Redirect from="/" to="/public" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

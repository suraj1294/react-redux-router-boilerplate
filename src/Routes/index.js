import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import MenuExampleSecondaryPointing from "../ui/common/navbar";
import Loader from "../ui/common/loader";

import About from "../About";
import Home from "../Home";
import Users from "../Users";

export default function Routes() {
  const rootAppState = useSelector((state) => state.rootApp);
  return (
    <Router>
      <MenuExampleSecondaryPointing />
      {rootAppState && rootAppState.showLoader && <Loader />}
      <div>
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

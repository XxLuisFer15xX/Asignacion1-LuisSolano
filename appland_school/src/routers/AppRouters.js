import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const AppRouters = () => {
  return (
    <Router>
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
};

import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPageScreen } from "../components/landing_page/LandingPageScreen";


export const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact="/" component={LandingPageScreen} />
    </Switch>
  );
};

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "../components/componentes_principales/Header";
import { LoginScreen } from "../components/login_registro/LoginScreen";
import { RegistroScreen } from "../components/login_registro/RegisterScreen";
import { Main } from "../components/componentes_principales/Main";

export const AppRouters = () => {
  return (
    <Router>
      <Header />

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegistroScreen} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};
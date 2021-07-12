import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "../components/Componentes_principales/Header";
import { LoginScreen } from "../components/Login_Registro/LoginScreen";
import { RegistroScreen } from "../components/Login_Registro/RegisterScreen";
import { Main } from "../components/Componentes_principales/Main";

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

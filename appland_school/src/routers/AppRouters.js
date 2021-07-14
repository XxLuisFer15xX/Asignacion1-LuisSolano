import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PublicRoute } from "./PublicRoute";

import { Header } from "../components/componentes_principales/Header";
import { LoginScreen } from "../components/login_registro/LoginScreen";
import { RegistroScreen } from "../components/login_registro/RegisterScreen";
import { Main } from "../components/componentes_principales/Main";

export const AppRouters = () => {
  
  const user = {
    logged: false
  }

  return (
    <Router>
      <Header />

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <PublicRoute
          exact 
          path="/login" 
          component={LoginScreen}
          isAuthenticated={user.logged}
        />
        <PublicRoute
          exact 
          path="/register" 
          component={RegistroScreen}
          isAuthenticated={user.logged}
        />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

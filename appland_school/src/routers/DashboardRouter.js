import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { CrearCrusoScreen } from "../components/crear_curso/CrearCrusoScreen";
import { DetallesScreen } from "../components/detalles_curso/DetallesScreen";
import { LandingPageScreen } from "../components/landing_page/LandingPageScreen";
import { PrevisualizarScreen } from "../components/previsualizar/PrevisualizarScreen";
import { PrivateRoute } from "./PrivateRoute";


export const DashboardRouter = () => {
  const {user} = useContext(AuthContext);
  return (
    <Switch>
      <Route exact path="/cursos" component={LandingPageScreen} />
      <Route exact path="/cursos/:cursoId" component={DetallesScreen} />
      <Route exact path="/cursos/:cursoId/previsualizar" component={PrevisualizarScreen} />
      <PrivateRoute 
        exact 
        path="/crear"
        component={CrearCrusoScreen}
        isAuthenticated={user.logged}
      />

      <Redirect to="/cursos" />
    </Switch>
  );
};

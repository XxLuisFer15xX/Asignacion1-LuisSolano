import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CrearCrusoScreen } from "../components/crear_curso/CrearCrusoScreen";
import { DetallesScreen } from "../components/detalles_curso/DetallesScreen";
import { LandingPageScreen } from "../components/landing_page/LandingPageScreen";
import { PrevisualizarScreen } from "../components/previsualizar/PrevisualizarScreen";


export const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/cursos" component={LandingPageScreen} />
      <Route exact path="/cursos/:cursoId" component={DetallesScreen} />
      <Route exact path="/cursos/:cursoId/previsualizar" component={PrevisualizarScreen} />
      <Route exact path="/crear" component={CrearCrusoScreen} />

      <Redirect to="/cursos" />
    </Switch>
  );
};

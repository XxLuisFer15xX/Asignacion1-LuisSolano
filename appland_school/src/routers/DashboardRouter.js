import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CrearCrusoScreen } from "../components/crear_curso/CrearCrusoScreen";
import { DetallesScreen } from "../components/detalles_curso/DetallesScreen";
import { LandingPageScreen } from "../components/landing_page/LandingPageScreen";
import { PrevisualizarScreen } from "../components/previsualizar/PrevisualizarScreen";
import { PrivateRoute } from "./PrivateRoute";

import {firebase} from "../database/firebase";

export const DashboardRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      if(user?.uid){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
    })
  }, [])

  return (
    <Switch>
      <Route exact path="/cursos" component={LandingPageScreen} />
      <Route exact path="/cursos/:cursoId" component={DetallesScreen} />
      <Route exact path="/cursos/:cursoId/previsualizar" component={PrevisualizarScreen} />
      <PrivateRoute 
        exact 
        path="/crear"
        component={CrearCrusoScreen}
        isAuthenticated={isLoggedIn}
      />

      <Redirect to="/cursos" />
    </Switch>
  );
};

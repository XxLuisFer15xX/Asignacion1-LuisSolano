import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PublicRoute } from "./PublicRoute";

import { Header } from "../components/componentes_principales/Header";
import { LoginScreen } from "../components/login_registro/LoginScreen";
import { RegistroScreen } from "../components/login_registro/RegisterScreen";
import { Main } from "../components/componentes_principales/Main";

import {firebase} from "../config/firebaseConfig";
import { useDispatch } from 'react-redux'
import { login } from "../Redux/actions/auth";

import { loadCursos } from '../Redux/helpers/loadCursos';
import { setCursos } from '../Redux/actions/cursos';

export const AppRouters = () => {
  const dispatch = useDispatch();
  
  const [cheking, setCheking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged( async(user) => {
      dispatch( setCursos(await loadCursos() ) );

      if(user?.uid){
        dispatch( login( user.uid, user.displayName, user.photoURL) );
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setCheking(false);
    })
  }, [dispatch, setCheking])

  if( cheking ){
    return (
      <h1>Espere...</h1>
    )
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
          isAuthenticated={isLoggedIn}
        />
        <PublicRoute
          exact 
          path="/register" 
          component={RegistroScreen}
          isAuthenticated={isLoggedIn}
        />
        <Route path="/" component={Main} isAuthenticated={isLoggedIn} saludo="hola" />
      </Switch>
    </Router>
  );
};

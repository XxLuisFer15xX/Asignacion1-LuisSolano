import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux"
import { startFacebookLogin, startGoogleLogin } from "../../Redux/actions/auth";

import "../../css/login_registro/login_registro.css";

export const LoginScreen = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleRegister = () => {
    history.replace("/register");

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    history.replace("/");
  };
  const handleGoogle = () => {
    dispatch( startGoogleLogin() );
  };
  const handleFacebook = () => {
    dispatch( startFacebookLogin() );
  };
  return (
    <main className="body-2">
      <div className="login_registro">
        <div className="">
          <h1>Inicio de Sesión</h1>
          <hr />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="textbox"
            type="text"
            placeholder="Correo electrónico"
          />
          <input className="textbox" type="text" placeholder="Contraseña" />
          <button className="btn btn-primary">Ingresar</button>
        </form>
        <h3>Inicia sesión con:</h3>
        <div className="redes-sociales">
          <img
            className="icon-social"
            src={`./assets/icons/Google.svg`}
            alt=""
            onClick={handleGoogle}
          />
          <img
            className="icon-social"
            src={`./assets/icons/Facebook.svg`}
            alt=""
            onClick={handleFacebook}
          />
        </div>
        <span>
          <p onClick={handleRegister}>¿No tienes cuenta aún?</p>
        </span>
      </div>
    </main>
  );
};

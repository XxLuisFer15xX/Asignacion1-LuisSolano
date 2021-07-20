import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "../../css/login_registro/login_registro.css";
import { startGoogleLogin } from "../../Redux/actions/auth";

export const RegistroScreen = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = () => {
    history.replace("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    history.replace("/");
  };
  const handleGoogle = () => {
    dispatch( startGoogleLogin() );
  };
  const handleFacebook = () => {
    
    history.replace("/");
  };
  return (
    <main className="body-2">
      <div className="login_registro">
        <div className="">
          <h1>Registrate</h1>
          <hr />
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input
            className="textbox"
            type="text"
            placeholder="Nombre Completo"
          />
          <input
            className="textbox"
            type="text"
            placeholder="Correo electrónico"
          />
          <input className="textbox" type="text" placeholder="Contraseña" />
          <input
            className="textbox"
            type="text"
            placeholder="Confirmar contraseña"
          />
          <button className="btn btn-primary">Ingresar</button>
        </form>
        <h3>Registrate con:</h3>
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
          <p onClick={handleLogin}>Ya tienes cuenta?</p>
        </span>
      </div>
    </main>
  );
};

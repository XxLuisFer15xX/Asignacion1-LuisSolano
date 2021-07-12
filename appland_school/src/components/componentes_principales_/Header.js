import React from "react";
import { useHistory } from "react-router-dom";

export const Header = ( props ) => {
  let history = useHistory();

  const handleLogin = () => {
    history.replace('/login')
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={`./assets/images/appland-logo.jpg`} alt="logo" />
        <h2>Appland School</h2>
      </div>
      <div className="menu">
        <button className="btn btn-primary" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        <button hidden className="btn btn-primary">
          Cerrar Sesión
        </button>
        <img src={`./assets/images/perfil.jpg`} alt="perfil" />
      </div>
    </header>
  );
};

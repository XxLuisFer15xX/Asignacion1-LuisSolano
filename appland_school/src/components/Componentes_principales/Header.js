import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={`./assets/images/appland-logo.jpg`} alt="" />
        <h2>Appland School</h2>
      </div>
      <div className="menu">
        <button className="btn btn-primary">
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

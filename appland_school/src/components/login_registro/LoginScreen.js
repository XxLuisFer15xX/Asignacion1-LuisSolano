import React from 'react'

import "../../css/login_registro/login_registro.css";

export const LoginScreen = () => {
    return (
      <main className="body-2">
        <div className="login_registro">
          <div className="">
            <h1>Inicio de Sesión</h1>
            <hr />
          </div>
          <form action="">
            <input className="textbox" type="text" placeholder="Correo electrónico" />
            <input className="textbox" type="text" placeholder="Contraseña" />
            <button className="btn btn-primary">Ingresar</button>
          </form>
          <h3>Inicia sesión con:</h3>
          <div className="redes-sociales">
            <img className="icon-social" src="../images/icons/Google.svg" alt="" />
            <img className="icon-social" src="../images/icons/Facebook.svg" alt="" />
          </div>
          <span>
            <a href="/register">¿No tienes cuenta aún?</a>
          </span>
        </div>
      </main>
    )
}

import React from 'react'

import "../../css/login_registro/login_registro.css";

export const RegistroScreen = () => {
    return (
      <main class="body-2">

      <div class="login_registro">
        <div class="">
          <h1>Registrate</h1>
          <hr />
        </div>
        <form action="">
          <input class="textbox" type="text" placeholder="Nombre Completo" />
          <input class="textbox" type="text" placeholder="Correo electrónico" />
          <input class="textbox" type="text" placeholder="Contraseña" />
          <input class="textbox" type="text" placeholder="Confirmar contraseña" />
          <button class="btn btn-primary">Ingresar</button>
        </form>
        <h3>Registrate con:</h3>
        <div class="redes-sociales">
          <img class="icon-social" src="../images/icons/Google.svg" alt="" />
          <img class="icon-social" src="../images/icons/Facebook.svg" alt="" />
        </div>
        <span>
          <a href="login">Ya tienes cuenta?</a>
        </span>
      </div>

    </main>
    )
}

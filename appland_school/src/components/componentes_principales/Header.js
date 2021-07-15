import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { startLogout } from "../../actions/auth";

export const Header = ( ) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const user = {
    logged: true,
    name: 'Luis'
  }

  const handleHome = () => {
    history.replace('/');
  }

  const handleLogin = () => {
    history.replace('/login');
  }

  const handleLogout = () => {
    dispatch( startLogout() )
  }

  const handleCrear = () => {
    history.push('/crear');
  }

  const handleVer = () => {
    history.replace('/');
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={`./assets/images/appland-logo.jpg`} alt="logo" />
        <h2 onClick={handleHome}>Appland School</h2>
      </div>
      <div className="menu">
        { !user.name
          ? <>
            <button className="btn btn-primary" onClick={handleLogin}>
              Iniciar Sesión
            </button></>
          : <>{ history.location.pathname === "/crear"
            ?<button className="btn btn-primary" onClick={handleVer}>
              Ver Cursos
              </button> 
            :<button className="btn btn-primary" onClick={handleCrear}>
              Crear Curso
              </button>
            }
            <button className="btn btn-primary"  onClick={handleLogout}>
            Cerrar Sesión
            </button>
            <p>{user.name}</p></>
        }
        <img src={ !user.name
          ?`./assets/images/user.jpg`
          :`./assets/images/perfil.jpg`
        } alt="perfil" />
      </div>
    </header>
  );
};

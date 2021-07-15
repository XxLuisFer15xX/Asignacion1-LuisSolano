import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { startLogout } from "../../actions/auth";

export const Header = ( ) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(state => state?.auth)

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
        { !state?.name
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
            <p>{state?.name}</p></>
        }
        <img src={ !state?.name
          ?`./assets/images/user.jpg`
          :`${state?.photo}`
        } alt="perfil" />
      </div>
    </header>
  );
};

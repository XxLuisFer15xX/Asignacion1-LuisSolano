import React from 'react'
import { Provider } from 'react-redux'

import { AppRouters } from './routers/AppRouters';
import { Footer } from './components/componentes_principales/Footer';
// import { authReducer } from './auth/authReducer';
import { store } from './store/store';

import "./css/index.css";
import "./css/elementos.css";

/* const init = () =>{
  return JSON.parse(localStorage.getItem('user')) || { logged: false }
} */

export const ApplandSchool = () => {
/* 
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    return () => {
      
    }
  }, [user])
 */
  
  return (
    <Provider store={ store} >
      <AppRouters />
      <Footer />
    </Provider>
  )
}

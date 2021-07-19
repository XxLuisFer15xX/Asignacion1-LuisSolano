import React from 'react'
import { Provider } from 'react-redux'

import { AppRouters } from './routers/AppRouters';
import { Footer } from './components/componentes_principales/Footer';

import { store } from './Redux/store/store';

import "./css/index.css";
import "./css/elementos.css";

export const ApplandSchool = () => {
  return (
    <Provider store={ store} >
      <AppRouters />
      <Footer />
    </Provider>
  )
}

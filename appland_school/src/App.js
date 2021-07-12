import React from 'react'

import { AppRouters } from './routers/AppRouters';
import { Footer } from './components/Componentes_principales/Footer';

import "./css/index.css";
import "./css/elementos.css";

export const App = () => {
  return (
    <>
      <AppRouters />
      <Footer />
    </>
  )
}

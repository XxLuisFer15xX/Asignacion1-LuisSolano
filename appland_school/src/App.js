import React from 'react'

import { Header } from './components/Componentes_principales/Header'
import { Main } from './components/Componentes_principales/Main';
import { Footer } from './components/Componentes_principales/Footer';

import "./css/index.css";
import "./css/elementos.css";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

import React from "react";

import { Slider } from "../landing_page/Slider";
import { Buscador } from "../landing_page/Buscador";
import { Cursos } from "../landing_page/Cursos";

import "../../css/landing/slider.css";
import "../../css/landing/busqueda.css";
import "../../css/landing/cursos.css";

export const LandingPage = () => {
  return (
    <main className="body">
      <div className="contenedor">
        <Slider />
        <Buscador />
        <Cursos />
      </div>
    </main>
  );
};

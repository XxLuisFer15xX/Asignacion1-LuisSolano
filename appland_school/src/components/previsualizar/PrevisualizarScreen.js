import React from "react";

import { Previsualizar } from "./Previsualizar";
import { Comentarios } from "../detalles_curso/Comentarios";

import "../../css/curso/previsualizar.css";
import "../../css/curso/comentarios.css";

export const PrevisualizarScreen = () => {
  return (
    <>
      <Previsualizar />
      <Comentarios />
    </>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Previsualizar = () => {
  const { cursos } = useSelector((state) => state.cursos);
  let history = useHistory();
  let acronimo = history.location.pathname.split("/")[2];

  const { id, image } = cursos.find((curso) => curso.acronimo === acronimo);
  return (
    <>
      <div className="curso_video" id={id}>
        <img src={`${image}`} alt="" />
        <button className="btn btn-primary">Visualizar</button>
      </div>
    </>
  );
};

import React from "react";
import { useHistory } from "react-router-dom";

import { useSelector } from "react-redux";

export const Detalles = () => {
  const { cursos } = useSelector((state) => state.cursos);
  let history = useHistory();
  let id = history.location.pathname.split("/")[2];

  const {
    titulo,
    image,
    lanzamiento,
    clasificacion,
    duracion,
    Nivel,
    descripcionC,
    descripcionL,
    palabrasClaves,
    calificacion,
  } = cursos.find((curso) => curso.id === id);

  let rowsCalification = [];
  for (let i = 0; i < calificacion; i++) {
    rowsCalification.push(
      <img key={i} src={`./assets/icons/star-filled.svg`} alt="" />
    );
  }
  for (let i = calificacion; i < 5; i++) {
    rowsCalification.push(
      <img key={i} src={`./assets/icons/star-empty.svg`} alt="" />
    );
  }

  const handlePrevisualizar = () =>{
    history.push(`${id}/previsualizar`)
  }

  return (
    <>
      <div className="curso_detalles" id={id}>
        <div className="curso_detalles_encabezado">
          <div className="curso_imagen">
            <img src={`${image}`} alt="" />
            <button className="btn btn-primary" onClick={handlePrevisualizar}>Previsualizar</button>
          </div>

          <div className="curso_detalle">
            <div className="detalles_encabezado">
              <span>Detalles</span>
              <hr />
            </div>
            <div className="detalles_cuerpo">
              <div className="detalles_titulo">
                <span>{titulo}</span>
              </div>
              <div className="detalles_lanzamiento">
                <span>Lanzamiento:</span>
                <p>{lanzamiento}</p>
              </div>
              <div className="detalles_clasificacion">
                <span>Clasificación:</span>
                <p>{clasificacion}</p>
              </div>
              <div className="detalles_duracion">
                <span>Duración:</span>
                <p>{duracion} horas</p>
              </div>
              <div className="detalles_nivel">
                <span>Nivel:</span>
                <p>{Nivel}</p>
              </div>
              <div className="detalles_descripcion">
                <span>Descripcion:</span>
                <p>{descripcionC}</p>
              </div>
              <div className="detalles_palabras">
                <span>Palabras claves:</span>
                <p>{palabrasClaves}</p>
              </div>
              <div className="detalles_calificacion">
                <span>Calificación</span>
                <div className="calificacion">{rowsCalification}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="curso_descripcion">
          <div className="descripcion_titulo">
            <span>Descripcion</span>
            <hr />
          </div>
          <div className="descripcion_cuerpo">
            <p>{descripcionL}</p>
          </div>
        </div>
      </div>
    </>
  );
};

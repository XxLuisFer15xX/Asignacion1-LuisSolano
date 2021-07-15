import React from "react";
import { useHistory } from "react-router-dom";

export const Curso = ({ curso }) => {
  let history = useHistory();
  const {
    id,
    titulo,
    image,
    descripcionC,
    clasificacion,
    calificacion,
    profesor,
    precio,
  } = curso;

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

  const handleImageClick = () => {
    history.push(`/cursos/${id}`);
  };

  return (
    <div className="curso-item" id={id}>
      <img src={`${image}`} alt="" onClick={handleImageClick} />
      <div className="curso-item-contenido">
        <h2 className="curso-item-titulo">{titulo}</h2>
        <hr />
        <p className="curso-item-descripcion">{descripcionC}</p>
        <div className="curso-item-caracteristicas">
          <span>{clasificacion}</span>
          <div className="calificacion">{rowsCalification}</div>
        </div>
      </div>
      <div className="curso-item-footer">
        <div>
          <img src={`${profesor.photo}`} alt="" />
          <span>{profesor.name}</span>
        </div>
        <span>{precio} $</span>
      </div>
    </div>
  );
};

import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const Curso = ({ curso }) => {
  let { comentarios } = useSelector((state) => state.comentarios);
  let history = useHistory();
  const {
    id,
    titulo,
    image,
    descripcionC,
    clasificacion,
    profesor,
    precio,
  } = curso;

  comentarios = comentarios.filter(c => c.idCurso === id);
  let calificacion = 0;
  for (let i = 0; i < comentarios.length; i++) {
    calificacion = calificacion + comentarios[i].calificacion
  }
  if (calificacion !== 0){
    calificacion = Math.round(calificacion / comentarios.length);
  }

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

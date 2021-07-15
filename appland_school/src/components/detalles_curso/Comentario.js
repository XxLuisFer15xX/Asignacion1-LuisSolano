import React from "react";

export const Comentario = (props) => {
  const {
    id,
    name,
    image,
    comentario,
    calificacion,
  } = props.comentario;
  /* console.log(
    id,
    name,
    image,
    comentario,
    calificacion); */

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
  return (
    <div className="comentarios_comentario" id={id}>
      <img src={`${image}`} alt="" />
      <div className="comentarios_caja">
        <h2>{name}</h2>
        <p>{comentario}</p>
        <div className="calificacion">Calificación: {rowsCalification}</div>
      </div>
    </div>
  );
};

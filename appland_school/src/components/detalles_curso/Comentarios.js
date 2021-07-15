import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Comentario } from "./Comentario";

export const Comentarios = () => {
  const { cursos } = useSelector((state) => state.cursos);
  const { comentarios } = useSelector((state) => state.comentarios);
  let history = useHistory();
  let idCurso = history.location.pathname.split("/")[2];
  const curso = cursos.find((curso) => curso.id === idCurso);

  console.log("curso: ", curso);
  /* console.log("comentarios: ", comentarios); */
  return (
    <>
      <div className="curso_comentarios">
        <div className="comentarios_titulo">
          <span>Comentarios</span>
          <hr />
        </div>

        <div className="comentarios_comentarios">
          {
            comentarios.map(comentario => {
              if(comentario.idCurso === curso.id){
                return <Comentario key={comentario.id} comentario={comentario} />
              }else{
                return null;
              }
            })
          }
        </div>
        <hr />

        <div className="comentarios_comentario">
          <img src={`./assets/images/perfil.jpg`} alt="" />
          <div className="comentarios_caja">
            <input className="textbox" type="text" />
            <div className="calificacion">
              <img src={`./assets/icons/star-filled.svg`} alt="" />
              <img src={`./assets/icons/star-filled.svg`} alt="" />
              <img src={`./assets/icons/star-filled.svg`} alt="" />
              <img src={`./assets/icons/star-filled.svg`} alt="" />
              <img src={`./assets/icons/star-empty.svg`} alt="" />
            </div>
          </div>
        </div>

        <div className="comentarios_comentar">
          <button className="btn btn-primary">Calificar</button>
        </div>
      </div>
    </>
  );
};

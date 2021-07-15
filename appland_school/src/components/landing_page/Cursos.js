import React from "react";

import { useSelector } from 'react-redux';

import { Curso } from "./Curso";

export const Cursos = () => {
  const { cursos } = useSelector(state => state.cursos)
  return (
    <div>
      <div className="cursos">
        {
          cursos.map(curso => {
            return <Curso key={curso.id} curso={curso} />
          })
        }
      </div>
    </div>
  );
};

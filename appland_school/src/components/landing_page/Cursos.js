import React from "react";

import { useSelector } from 'react-redux';
import { typesSearch } from "../../types/types";

import { Curso } from "./Curso";

export const Cursos = () => {
  const { cursos } = useSelector(state => state.cursos);
  const { buscador } = useSelector(state => state);
  let cursosFiltrados = [{}];

  if(buscador.palabras &&  buscador.palabras.length >= 3){
    switch (buscador.filtrar) {
      case typesSearch.filterDefault:
      case typesSearch.filterName:
        cursosFiltrados = [...cursos.filter( (e)=>e.titulo.toLowerCase().includes(buscador.palabras.toLowerCase()) )]
        break;
      case typesSearch.filterCategory:
        cursosFiltrados = [...cursos.filter( (e)=>e.clasificacion.toLowerCase().includes(buscador.palabras.toLowerCase()) )]
        break;
      case typesSearch.filterKeywords:
        cursosFiltrados = [...cursos.filter( (e)=>e.palabrasClaves.toLowerCase().includes(buscador.palabras.toLowerCase()) )]
        break;
      default:
        break;
    }
  }else{
    cursosFiltrados = [...cursos]
  }
  
  switch (buscador.ordenar) {
    case typesSearch.orderDefault:
    case typesSearch.orderMenor:
      cursosFiltrados.sort( (a,b) => {
        let ordenarA = '';
        let ordenarB = '';
        switch (buscador.filtrar) {
          case typesSearch.filterDefault:
          case typesSearch.filterName:
            ordenarA = a.titulo.toLowerCase();
            ordenarB = b.titulo.toLowerCase();
            break;
          case typesSearch.filterCategory:
            ordenarA = a.clasificacion.toLowerCase();
            ordenarB = b.clasificacion.toLowerCase();
            break;
          case typesSearch.filterKeywords:
            ordenarA = a.palabrasClaves.toLowerCase();
            ordenarB = b.palabrasClaves.toLowerCase();
            break;
          default:
            break;
        }
        if (ordenarA < ordenarB) {
          return -1;
        }
        if (ordenarA > ordenarB) {
          return 1;
        }
        return 0;
      })
      break;

    case typesSearch.orderMayor:
      cursosFiltrados.sort( (a,b) => {
        let ordenarA = '';
        let ordenarB = '';
        switch (buscador.filtrar) {
          case typesSearch.filterDefault:
          case typesSearch.filterName:
            ordenarA = a.titulo.toLowerCase();
            ordenarB = b.titulo.toLowerCase();
            break;
          case typesSearch.filterCategory:
            ordenarA = a.clasificacion.toLowerCase();
            ordenarB = b.clasificacion.toLowerCase();
            break;
          case typesSearch.filterKeywords:
            ordenarA = a.palabrasClaves.toLowerCase();
            ordenarB = b.palabrasClaves.toLowerCase();
            break;
          default:
            break;
        }
        if (ordenarA > ordenarB) {
          return -1;
        }
        if (ordenarA < ordenarB) {
          return 1;
        }
        return 0;
      })
      break;
      
      default:
        break;
  }

  return (
    <div>
      <div className="cursos">
        {
          cursosFiltrados.map(curso => {
            return <Curso key={curso.id} curso={curso} />
          })
        }
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { changeBusqueda, changeFilter, changeOrder } from "../../Redux/actions/search";
import { typesSearch } from "../../types/types";

export const Buscador = () => {
  const dispatch = useDispatch();
  const ordenarRef = useRef(true);
  const filtrarRef = useRef(true);

  const [formState, setFormState] = useState({
    busquedaValue: ''
  })
  const { busquedaValue } = formState;

  useEffect(() => {
    dispatch( changeBusqueda(formState.busquedaValue) );
  }, [formState, dispatch])

  const handleInputChange = ({target}) =>{
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }


  const handleOrderChange = () => {
    const value = ordenarRef.current.options[ordenarRef.current.options.selectedIndex].value;
    dispatch(changeOrder(value));
  };

  const handleFilterChange = () => {
    const value = filtrarRef.current.options[filtrarRef.current.options.selectedIndex].value;
    dispatch(changeFilter(value));
  };

  return (
    <div className="busqueda">
      <h4 className="busqueda-titulo">Cursos</h4>

      <div className="busqueda-acciones">
        <div className="busqueda-ordenar">
          <select
            className="combobox"
            id="ordenar"
            name="cursos"
            onChange={handleOrderChange}
            ref={ordenarRef}
          >
            <option value={typesSearch.orderDefault}>
              Ordenar calificacion
            </option>
            <option value={typesSearch.orderMenor}>Menor a mayor</option>
            <option value={typesSearch.orderMayor}>Mayor a menor</option>
          </select>
        </div>

        <div className="busqueda-filtrar">
          <select
            className="combobox"
            id="filtrar"
            name="cursos"
            onChange={handleFilterChange}
            ref={filtrarRef}
          >
            <option value={typesSearch.filterDefault}>Filtrar por</option>
            <option value={typesSearch.filterName}>Nombre</option>
            <option value={typesSearch.filterCategory}>Categoria</option>
            <option value={typesSearch.filterKeywords}>Palabras Claves</option>
          </select>
        </div>

        <div className="busqueda-buscar">
          <input 
            className="textbox" 
            type="text" 
            id="buscar"
            name="busquedaValue"
            value={ busquedaValue }
            onChange={ handleInputChange }
          />
        </div>
      </div>
    </div>
  );
};

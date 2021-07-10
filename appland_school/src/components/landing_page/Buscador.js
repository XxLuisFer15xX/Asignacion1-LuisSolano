import React from 'react'

export const Buscador = () => {
    return (
        <div className="busqueda">
          <h4 className="busqueda-titulo">Cursos</h4>

          <div className="busqueda-acciones">
            <div className="busqueda-ordenar">
              <select className="combobox" id="ordenar" name="cursos">
                <option value="default">Ordenar calificacion</option>
                <option value="mayor">Mayor a menor</option>
                <option value="menor">Menor a mayor</option>
              </select>
            </div>
  
            <div className="busqueda-filtrar">
              <select className="combobox" id="filtrar" name="cursos">
                <option value="default">Filtrar por</option>
                <option value="nombre">Nombre</option>
                <option value="categoria">Categoria</option>
                <option value="palabrasClaves">Palabras Claves</option>
              </select>
            </div>
  
            <div className="busqueda-buscar">
              <input className="textbox" type="text" name="cursos" id="buscar" />
            </div>
          </div>
        </div>
    )
}

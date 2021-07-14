import React from "react";

export const FomrularioCrear = () => {
  return (
    <>
      <div className="curso_configuracion">
        <div className="configuracion_titulo">
          <span>Configure los datos del curso</span>
          <hr />
        </div>

        <div className="configuracion_formulario">
          <div className="configuracion_items">
            <div className="configuracion_item">
              <span>Título del curso</span>
              <input className="textbox" type="text" />
            </div>
            <div className="configuracion_item">
              <span>Clasificación del curso</span>
              <div>
                <select className="combobox" id="ordenar" name="cursos">
                  <option value="curso">Curso</option>
                  <option value="especialidad">Especialidad</option>
                  <option value="taller">Taller</option>
                </select>
                <img src={`./assets/images/add.png`} alt="" />
              </div>
            </div>
            <div className="configuracion_item">
              <span>Nivel del curso</span>
              <div>
                <select className="combobox" id="ordenar" name="cursos">
                  <option value="basico">Básico</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>
            </div>
            <div className="configuracion_item">
              <span>Horas de duración</span>
              <input className="textbox" type="text" />
            </div>
            <div className="configuracion_item">
              <span>Descripcion corta</span>
              <input className="textbox" type="text" />
            </div>
            <div className="configuracion_item">
              <span>Palabras claves</span>
              <input className="textbox" type="text" />
            </div>
          </div>
          <div className="configuracion_item_largo">
            <span>Descripcion larga</span>
            <input className="textbox" type="text" />
          </div>
        </div>

        <div className="configuracion_botones">
          <button className="btn btn-primary">Descartar cambios</button>
          <button className="btn btn-primary">Guardar todos los cambios</button>
        </div>
      </div>
    </>
  );
};

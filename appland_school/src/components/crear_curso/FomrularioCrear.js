import React from "react";

export const FomrularioCrear = () => {
  return (
    <>
      <div class="curso_configuracion">
        <div class="configuracion_titulo">
          <span>Configure los datos del curso</span>
          <hr />
        </div>

        <div class="configuracion_formulario">
          <div class="configuracion_items">
            <div class="configuracion_item">
              <span>Título del curso</span>
              <input class="textbox" type="text" />
            </div>
            <div class="configuracion_item">
              <span>Clasificación del curso</span>
              <div>
                <select class="combobox" id="ordenar" name="cursos">
                  <option value="curso">Curso</option>
                  <option value="especialidad">Especialidad</option>
                  <option value="taller">Taller</option>
                </select>
                <img src={`./assets/images/add.png`} alt="" />
              </div>
            </div>
            <div class="configuracion_item">
              <span>Nivel del curso</span>
              <div>
                <select class="combobox" id="ordenar" name="cursos">
                  <option value="basico">Básico</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>
            </div>
            <div class="configuracion_item">
              <span>Horas de duración</span>
              <input class="textbox" type="text" />
            </div>
            <div class="configuracion_item">
              <span>Descripcion corta</span>
              <input class="textbox" type="text" />
            </div>
            <div class="configuracion_item">
              <span>Palabras claves</span>
              <input class="textbox" type="text" />
            </div>
          </div>
          <div class="configuracion_item_largo">
            <span>Descripcion larga</span>
            <input class="textbox" type="text" />
          </div>
        </div>

        <div class="configuracion_botones">
          <button class="btn btn-primary">Descartar cambios</button>
          <button class="btn btn-primary">Guardar todos los cambios</button>
        </div>
      </div>
    </>
  );
};

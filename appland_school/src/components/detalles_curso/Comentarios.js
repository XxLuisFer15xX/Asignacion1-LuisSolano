import React from "react";

export const Comentarios = () => {
  return (
    <>
      <div class="curso_comentarios">
        <div class="comentarios_titulo">
          <span>Comentarios</span>
          <hr />
        </div>

        <div class="comentarios_comentarios">
          <div class="comentarios_comentario">
            <img src={`./assets/images/perfil.jpg`} alt="" />
            <div class="comentarios_caja">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aliquid expedita esse non distinctio beatae autem rem
                magni quo tempore repellendus impedit suscipit nemo facere
                eveniet molestias, illum unde. Reiciendis quia ex vel, autem
                facilis nam vitae aut dicta. Ex, sed dolorum aut, id accusamus
                laudantium provident incidunt assumenda laborum a fugit
                doloribus omnis debitis placeat voluptatibus, porro modi sint
                unde sit fuga. Culpa earum quidem harum a vitae velit nobis
                praesentium fugiat est atque voluptas quis voluptatum, impedit
                animi! Corrupti molestiae tenetur, nesciunt ad corporis odio
                quia quasi vel, accusamus eum doloremque velit autem quaerat
                quis cumque culpa est?
              </p>
              <div class="calificacion">
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-empty.svg`} alt="" />
              </div>
            </div>
          </div>

          <div class="comentarios_comentario">
            <img src={`./assets/images/perfil.jpg`} alt="" />
            <div class="comentarios_caja">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aliquid expedita esse non distinctio beatae autem rem
                magni quo tempore repellendus impedit suscipit nemo facere
                eveniet molestias, illum unde. Reiciendis quia ex vel, autem
                facilis nam vitae aut dicta. Ex, sed dolorum aut, id accusamus
                laudantium provident incidunt assumenda laborum a fugit
                doloribus omnis debitis placeat voluptatibus, porro modi sint
                unde sit fuga. Culpa earum quidem harum a vitae velit nobis
                praesentium fugiat est atque voluptas quis voluptatum, impedit
                animi! Corrupti molestiae tenetur, nesciunt ad corporis odio
                quia quasi vel, accusamus eum doloremque velit autem quaerat
                quis cumque culpa est?
              </p>
              <div class="calificacion">
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-empty.svg`} alt="" />
              </div>
            </div>
          </div>

          <div class="comentarios_comentario">
            <img src={`./assets/images/perfil.jpg`} alt="" />
            <div class="comentarios_caja">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis aliquid expedita esse non distinctio beatae autem rem
                magni quo tempore repellendus impedit suscipit nemo facere
                eveniet molestias, illum unde. Reiciendis quia ex vel, autem
                facilis nam vitae aut dicta. Ex, sed dolorum aut, id accusamus
                laudantium provident incidunt assumenda laborum a fugit
                doloribus omnis debitis placeat voluptatibus, porro modi sint
                unde sit fuga. Culpa earum quidem harum a vitae velit nobis
                praesentium fugiat est atque voluptas quis voluptatum, impedit
                animi! Corrupti molestiae tenetur, nesciunt ad corporis odio
                quia quasi vel, accusamus eum doloremque velit autem quaerat
                quis cumque culpa est?
              </p>
              <div class="calificacion">
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-empty.svg`} alt="" />
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="comentarios_comentario">
          <img src={`./assets/images/perfil.jpg`} alt="" />
          <div class="comentarios_caja">
            <input class="textbox" type="text" />
            <div class="calificacion">
              <img src={`./assets/icons/star-filled.svg`} alt="" />
              <img src={`./assets/icons/star-filled.svg`} alt="" />
              <img src={`./assets/icons/star-filled.svg`} alt="" />
              <img src={`./assets/icons/star-filled.svg`} alt="" />
              <img src={`./assets/icons/star-empty.svg`} alt="" />
            </div>
          </div>
        </div>

        <div class="comentarios_comentar">
          <button class="btn btn-primary">Calificar</button>
        </div>
      </div>
    </>
  );
};

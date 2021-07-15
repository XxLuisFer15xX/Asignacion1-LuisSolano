import React from "react";

export const Comentarios = () => {
  return (
    <>
      <div className="curso_comentarios">
        <div className="comentarios_titulo">
          <span>Comentarios</span>
          <hr />
        </div>

        <div className="comentarios_comentarios">
          <div className="comentarios_comentario">
            <img src={`./assets/images/perfil.jpg`} alt="" />
            <div className="comentarios_caja">
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
              <div className="calificacion">
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-empty.svg`} alt="" />
              </div>
            </div>
          </div>

          <div className="comentarios_comentario">
            <img src={`./assets/images/perfil.jpg`} alt="" />
            <div className="comentarios_caja">
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
              <div className="calificacion">
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-empty.svg`} alt="" />
              </div>
            </div>
          </div>

          <div className="comentarios_comentario">
            <img src={`./assets/images/perfil.jpg`} alt="" />
            <div className="comentarios_caja">
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
              <div className="calificacion">
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

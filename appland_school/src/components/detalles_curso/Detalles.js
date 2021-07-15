import React from "react";

export const Detalles = () => {
  return (
    <>
      <div className="curso_detalles">
        <div className="curso_detalles_encabezado">
          <div className="curso_imagen">
            <img src={`./assets/images/firebase.png`} alt="" />
            <button className="btn btn-primary">Previsualizar</button>
          </div>

          <div className="curso_detalle">
            <div className="detalles_encabezado">
              <span>Detalles</span>
              <hr />
            </div>
            <div className="detalles_cuerpo">
              <div className="detalles_titulo">
                <span>Curso de Firebase</span>
              </div>
              <div className="detalles_lanzamiento">
                <span>Lanzamiento:</span>
                <p>05 de julio de 2021</p>
              </div>
              <div className="detalles_clasificacion">
                <span>Clasificación:</span>
                <p>Especialidad</p>
              </div>
              <div className="detalles_duracion">
                <span>Duración:</span>
                <p>5 horas</p>
              </div>
              <div className="detalles_nivel">
                <span>Nivel:</span>
                <p>básico</p>
              </div>
              <div className="detalles_descripcion">
                <span>Descripcion:</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                  unde recusandae ex ipsam asperiores totam aut suscipit in
                  nihil cum doloremque dignissimos, sint reprehenderit
                  temporibus iure officiis, tempora, esse maiores perferendis
                  cupiditate dolore? Ex non, debitis incidunt nesciunt accusamus
                  totam.
                </p>
              </div>
              <div className="detalles_palabras">
                <span>Palabras claves:</span>
                <p>Lorem, ipsum dolor.</p>
              </div>
              <div className="detalles_calificacion">
                <span>Calificación</span>
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
        </div>

        <div className="curso_descripcion">
          <div className="descripcion_titulo">
            <span>Descripcion</span>
            <hr />
          </div>
          <div className="descripcion_cuerpo">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi ad quod explicabo quasi repellendus quaerat illo
              laudantium. Id magni molestiae reprehenderit quasi natus sint
              explicabo. Commodi quod nisi sapiente repudiandae porro debitis
              eos blanditiis maxime nulla consequatur praesentium placeat illum
              quia excepturi, atque nesciunt explicabo nostrum esse harum
              doloribus! At.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

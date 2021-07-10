import React from 'react'

export const Curso = () => {
    return (
        <div className="curso-item">
          <img src={`./assets/images/firebase.png`} alt="" />
          <div className="curso-item-contenido">
            <h2 className="curso-item-titulo">Curso de Firebase</h2>
            <hr />
            <p className="curso-item-descripcion">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak</p>
            <div className="curso-item-caracteristicas">
              <span>Curso</span>
              <div className="calificacion">
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-filled.svg`} alt="" />
                <img src={`./assets/icons/star-empty.svg`} alt="" />
              </div>
            </div>
          </div>
          <div className="curso-item-footer">
            <div>
              <img src={`./assets/images/perfil.jpg`} alt="" />
              <span>Luis Solano</span>
            </div>
            <span>10 $</span>
          </div>
        </div>
    )
}

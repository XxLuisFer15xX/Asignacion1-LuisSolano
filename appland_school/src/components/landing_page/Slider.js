import React from 'react'

export const Slider = () => {
    return (
        <>
          <div className="contenedor-slider">
            <h3 className="slider-titulo">Aprende a desarrollar con Appland School</h3>
            <div className="slider-container">
              <div className="slider">
                <img className="slider-img active" src={`./assets/images/slider/1.webp`} alt=""/>
                <img className="slider-img" src={`./assets/images/slider/2.png`} alt=""/>
                <img className="slider-img" src={`./assets/images/slider/3.jpg`} alt=""/>
              </div>

              <nav className="slider-nav">
                <ul>
                  <li className="arrow">
                    <button className="slider-btn slider-previous">
                      <span>
                        <i className="ion-arrow-left-c">Atras</i>
                      </span>
                    </button>
                  </li>
                  <li className="arrow">
                    <button className="slider-btn slider-next">
                      <span>
                        <i className="ion-arrow-right-c">Siguiente</i>
                      </span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          <script src="./slider_logic.js"></script>
        </>
    )
}

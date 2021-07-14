import React, { useEffect, useRef, useState } from 'react'

export const Slider = () => {
  const sliderRef = useRef(true);
  const [sliders, setSliders] = useState([]);
  const [sliderItems, setsLiderItems] = useState(0);
  const [countSlider, setCountSlider] = useState(0);

  useEffect(() => {
    setSliders( [...sliderRef.current.querySelectorAll('.slider-img')] );
    setsLiderItems( sliderRef.current.querySelectorAll('.slider-img').length );
    setCountSlider(0)
  }, [])
  
  useEffect(() => {
    setSliders( (s) => s.map( (e, i) => {
      e.classList.remove('active');
      if( countSlider === i ){
        e.classList.add('active');
      }
      return e;
    }) );

  }, [countSlider])
  
  const handleNext = () =>{
    setSliders( sliders );
    if(countSlider < sliderItems - 1) {
      setCountSlider( countSlider + 1 );
    } else {
      setCountSlider( 0 );
    }
  }
  const handlePrevious = () =>{
    if(countSlider > 0 ) {
      setCountSlider( countSlider - 1 );
    } else {
      setCountSlider( sliderItems - 1 );
    }
  }

    return (
        <>
          <div className="contenedor-slider">
            <h3 className="slider-titulo">Aprende a desarrollar con Appland School</h3>
            <div className="slider-container">
              <div className="slider" ref={ sliderRef }>
                <img className="slider-img active" src={`./assets/images/slider/1.webp`} alt=""/>
                <img className="slider-img" src={`./assets/images/slider/2.png`} alt=""/>
                <img className="slider-img" src={`./assets/images/slider/3.jpg`} alt=""/>
              </div>

              <nav className="slider-nav">
                <ul>
                  <li className="arrow">
                    <button className="slider-btn slider-previous" onClick={handlePrevious}>
                      <span>
                        <i className="ion-arrow-left-c">Atras</i>
                      </span>
                    </button>
                  </li>
                  <li className="arrow">
                    <button className="slider-btn slider-next" onClick={handleNext}>
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

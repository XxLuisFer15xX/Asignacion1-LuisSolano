import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Comentario } from "./Comentario";
import { useDispatch } from 'react-redux'
import { db } from "../../config/firebaseConfig";
import { newComentario } from "../../Redux/actions/comentarios";

// import { upLoadCursos } from "../../Redux/helpers/uploadCursos";

export const Comentarios = () => {
  const dispatch = useDispatch();
  const { cursos } = useSelector((state) => state.cursos);
  const { comentarios } = useSelector((state) => state.comentarios);
  const { uid:userId, name: userName, photo: userPhoto } = useSelector((state) => state.auth)
  let history = useHistory();
  
  let acronimo = history.location.pathname.split("/")[2];
  const curso = cursos.find((curso) => curso.acronimo === acronimo);
  let idCurso = curso.id;

  const calificationRef = useRef(true);
  const startRef1 = useRef(true);
  const startRef2 = useRef(true);
  const startRef3 = useRef(true);
  const startRef4 = useRef(true);
  const startRef5 = useRef(true);

  const [formState, setFormState] = useState({
    comentarValue: ''
  })
  const { comentarValue } = formState;

  useEffect(() => {
    // dispatch( changeBusqueda(formState.busquedaValue) );
  }, [formState])

  const handleInputChange = ({target}) =>{
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }
  
  const handleSubmit = async (e) =>{
    const calificacionValue = calificationRef.current.querySelectorAll('.start-filled').length;
    
    // console.log(calificacionValue)
    // upLoadCursos();

    e.preventDefault();
    
    const countComentariosUser = comentarios.filter(com => com.idCurso === idCurso && com?.idUser === userId).length;
    if (!userName) {
      history.push("/login")
    }else if (formState.comentarValue.trim().length > 0 && countComentariosUser === 0) {
      let newComent = {
        idCurso: idCurso,
        idUser: userId,
        name: userName,
        image: userPhoto,
        comentario: formState.comentarValue,
        calificacion: calificacionValue
      }
  
      const doc = await db.collection('Comentarios').add ( newComent );
      
      newComent = {
        id: doc.id,
        idCurso: idCurso,
        idUser: userId,
        name: userName,
        image: userPhoto,
        comentario: formState.comentarValue,
        calificacion: calificacionValue
      }
      dispatch( newComentario(newComent) );
      setFormState({
        comentarValue: ''
      });
    }
  }

  const handleStart = (e) =>{
    switch (e.target.id) {
      case "start-1":
        startRef1.current.src = "./assets/icons/star-filled.svg";
        startRef2.current.src = "./assets/icons/star-empty.svg";
        startRef3.current.src = "./assets/icons/star-empty.svg";
        startRef4.current.src = "./assets/icons/star-empty.svg";
        startRef5.current.src = "./assets/icons/star-empty.svg";
        startRef1.current.className = "start-filled"
        startRef2.current.className = "start-empty"
        startRef3.current.className = "start-empty"
        startRef4.current.className = "start-empty"
        startRef5.current.className = "start-empty"
        break
      ;
      case "start-2":
        startRef1.current.src = "./assets/icons/star-filled.svg";
        startRef2.current.src = "./assets/icons/star-filled.svg";
        startRef3.current.src = "./assets/icons/star-empty.svg";
        startRef4.current.src = "./assets/icons/star-empty.svg";
        startRef5.current.src = "./assets/icons/star-empty.svg";
        startRef1.current.className = "start-filled"
        startRef2.current.className = "start-filled"
        startRef3.current.className = "start-empty"
        startRef4.current.className = "start-empty"
        startRef5.current.className = "start-empty"
        break
      ;
      case "start-3":
        startRef1.current.src = "./assets/icons/star-filled.svg";
        startRef2.current.src = "./assets/icons/star-filled.svg";
        startRef3.current.src = "./assets/icons/star-filled.svg";
        startRef4.current.src = "./assets/icons/star-empty.svg";
        startRef5.current.src = "./assets/icons/star-empty.svg";
        startRef1.current.className = "start-filled"
        startRef2.current.className = "start-filled"
        startRef3.current.className = "start-filled"
        startRef4.current.className = "start-empty"
        startRef5.current.className = "start-empty"
        break
      ;
      case "start-4":
        startRef1.current.src = "./assets/icons/star-filled.svg";
        startRef2.current.src = "./assets/icons/star-filled.svg";
        startRef3.current.src = "./assets/icons/star-filled.svg";
        startRef4.current.src = "./assets/icons/star-filled.svg";
        startRef5.current.src = "./assets/icons/star-empty.svg";
        startRef1.current.className = "start-filled"
        startRef2.current.className = "start-filled"
        startRef3.current.className = "start-filled"
        startRef4.current.className = "start-filled"
        startRef5.current.className = "start-empty"
        break
      ;
      case "start-5":
        startRef1.current.src = "./assets/icons/star-filled.svg";
        startRef2.current.src = "./assets/icons/star-filled.svg";
        startRef3.current.src = "./assets/icons/star-filled.svg";
        startRef4.current.src = "./assets/icons/star-filled.svg";
        startRef5.current.src = "./assets/icons/star-filled.svg";
        startRef1.current.className = "start-filled"
        startRef2.current.className = "start-filled"
        startRef3.current.className = "start-filled"
        startRef4.current.className = "start-filled"
        startRef5.current.className = "start-filled"
        break
      ;
      default:
        break;
    }
  }

  return (
    <>
      <div className="curso_comentarios">
        <div className="comentarios_titulo">
          <span>Comentarios</span>
          <hr />
        </div>

        <div className="comentarios_comentarios">
          {
            comentarios.map(comentario => {
              if(comentario.idCurso === idCurso){
                return <Comentario key={comentario.id} comentario={comentario} />
              }else{
                return null;
              }
            })
          }
        </div>
        <hr />

        <div className="comentarios_comentario">
          <img src={userPhoto
            ? userPhoto
            : `./assets/images/user.jpg`
          } alt="" />
          <div className="comentarios_caja">
            <input 
              className="textbox" 
              type="text" 
              id="comentar"
              name="comentarValue"
              value={ comentarValue }
              onChange={ handleInputChange }
            />
            <div className="calificacion" ref={calificationRef}>
              <img ref={startRef1} id="start-1" className="start-filled" src={`./assets/icons/star-filled.svg`} alt="" onClick={handleStart} />
              <img ref={startRef2} id="start-2" className="start-filled" src={`./assets/icons/star-filled.svg`} alt="" onClick={handleStart} />
              <img ref={startRef3} id="start-3" className="start-filled" src={`./assets/icons/star-filled.svg`} alt="" onClick={handleStart} />
              <img ref={startRef4} id="start-4" className="start-filled" src={`./assets/icons/star-filled.svg`} alt="" onClick={handleStart} />
              <img ref={startRef5} id="start-5" className="start-filled" src={`./assets/icons/star-filled.svg`} alt="" onClick={handleStart} />
            </div>
          </div>
        </div>

        <div className="comentarios_comentar">
          <button className="btn btn-primary" onClick={handleSubmit}>Calificar</button>
        </div>
      </div>
    </>
  );
};

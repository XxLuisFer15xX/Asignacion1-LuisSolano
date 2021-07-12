import React from 'react';
import { useParams } from 'react-router-dom';

import { Detalles } from './Detalles';
import { Comentarios } from './Comentarios';

import '../../css/curso/detalles.css'
import '../../css/curso/comentarios.css'

export const DetallesScreen = () => {
    const { cursoId } = useParams();
    console.log(cursoId);
    return (
        <>
            <Detalles />
            <Comentarios />
        </>
    )
}

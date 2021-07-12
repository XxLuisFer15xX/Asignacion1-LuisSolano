import React from 'react'

import { FomrularioCrear } from './FomrularioCrear'
import { PrevisualizarDetalles } from './PrevisualizarDetalles'

import '../../css/curso/crear_curso.css'

export const CrearCrusoScreen = () => {
    return (
        <>
          <PrevisualizarDetalles />
          <FomrularioCrear />
        </>
    )
}

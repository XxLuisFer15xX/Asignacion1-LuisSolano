import { types } from "../../types/types";

export const changeOrder = (type) => {
    return ( dispatch ) => {
        dispatch( order(type) );
    }
}

export const order = (type) => ({
    type: types.orderChange,
    payload: {
        type
    }
})

export const changeFilter = (type) => {
    return ( dispatch ) => {
        dispatch( filter(type) );
    }
}

export const filter = (type) => ({
    type: types.filterChange,
    payload: {
        type
    }
})

export const changeBusqueda = (words) => {
    return ( dispatch ) => {
        dispatch( busqueda(words) );
    }
}

export const busqueda = (words) => ({
    type: types.buscarChange,
    payload: {
        words
    }
})
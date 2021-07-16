import { types, typesSearch } from "../../types/types";

const initialState = {
    ordenar: typesSearch.orderDefault,
    filtrar: typesSearch.filterDefault,
    palabras: ''
}

export const buscadorReducer = ( state=initialState, action ) => {
    
    switch (action.type) {
        case types.orderChange:
            return {
                ordenar: action.payload?.type,
                filtrar: state.filtrar,
                palabras: state.palabras,
            };

        case types.filterChange:
            return {
                ordenar: state.ordenar,
                filtrar: action.payload?.type,
                palabras: state.palabras,
            };
        
        case types.buscarChange:
            return{
                ordenar: state.ordenar,
                filtrar: state.filtrar,
                palabras: action.payload?.words,
            }

        default:
            return state;
    }
}
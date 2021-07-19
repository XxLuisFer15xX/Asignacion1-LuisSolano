import { types } from "../../types/types";

const initialState = {
    cursos: [],
    active: null
}

export const cursosReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case types.cursosLoad:
            return {
                ...state,
                cursos: action.payload
            }
        default:
            return state;
    }
}
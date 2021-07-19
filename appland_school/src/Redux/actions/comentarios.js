import { types } from "../../types/types";

export const setComentarios = (comentarios) => ({
    type: types.comentariosLoad,
    payload: comentarios
})
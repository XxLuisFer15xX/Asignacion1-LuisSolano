import { types } from "../../types/types";

export const setCursos = (cursos) => ({
    type: types.cursosLoad,
    payload: cursos
})
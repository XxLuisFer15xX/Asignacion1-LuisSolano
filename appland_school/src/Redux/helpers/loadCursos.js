import { db } from "../../config/firebaseConfig"

export const loadCursos = async () => {
    const cursosSnap = await db.collection(`Cursos`).get();
    const cursos = [];
    
    cursosSnap.forEach( snapHijo => {
        cursos.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    
    return cursos;
}
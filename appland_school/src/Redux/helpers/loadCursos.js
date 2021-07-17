import { db } from "../../config/firebaseConfig"

export const loadCursos = async () => {
    const cursosSnap = await db.collection(`Cursos`).get();
    const cursos = [];
    const profesorSnap = await db.collection(`Cursos/${'27xDz292j6zdcO49qrWt'}/profesor`).get();
    
    
    cursosSnap.forEach( snapHijo => {
        const profesor = [];

        profesorSnap.forEach( snapHijo => {
            profesor.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
        })
        cursos.push({
            id: snapHijo.id,
            ...snapHijo.data(),
            profesor: profesor[0]
        })
    })
    return cursos;
}
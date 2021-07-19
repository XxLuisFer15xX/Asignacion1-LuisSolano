import { db } from "../../config/firebaseConfig"

export const loadComentarios = async () => {
    const comentariosSnap = await db.collection(`Comentarios`).get();
    const comentarios = [];
    
    comentariosSnap.forEach( snapHijo => {
        comentarios.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return comentarios
}
const functions = require("firebase-functions");
const admin = require('firebase-admin')
const express = require('express')

const app = express()

const cors = require("cors");
app.use(cors({ origin: true }));

admin.initializeApp({
    credential: admin.credential.applicationDefault()
})
const db = admin.firestore()

app.get('/hello', (req, res) =>{
    return res.status(200).json({message:'hello word'})
})

app.post('/api/set/Clasificacion', async (req, res) =>{
    // return res.status(200).json({message:'hello word'})
    try{
        await db.collection('Clasificacion').doc().create({
            nameClasificacion: 'Master'
        })
        return res.status(204).json();
    } catch (error) {
        return res.status(500).send(error)
    }
})

app.post('/api/set/Comentarios', async (req, res) =>{
    // return res.status(200).json({message:'hello word'})
    try{
        // await db.collection('Comentarios').doc().create(req.body)
        console.log(req.body);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).send(error)
    }
})

app.get('/api/get/cursos', async (req, res) => {
    try{
        const docs = await db.collection('Cursos').get()
        const cursos = [];
        docs.forEach( snapHijo => {
            cursos.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
        })
        return res.status(200).json(cursos);
    } catch (error){
        return res.status(500).send(error)
    }
})

app.get('/api/get/comentarios', async (req, res) => {
    try{
        const docs = await db.collection('Comentarios').get()
        const comentarios = [];
        docs.forEach( snapHijo => {
            comentarios.push({
                id: snapHijo.id,
                ...snapHijo.data()
            })
        })
        return res.status(200).json(comentarios);
    } catch (error){
        return res.status(500).send(error)
    }
})

exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

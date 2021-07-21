// import { db } from "../../config/firebaseConfig";

export const upLoadCursos = async() => {
    let newCursos = [
        {
            Nivel: "básico",
            acronimo: "angular",
            clasificacion: "Curso",
            titulo: "Curso de Angular",
            image: "./assets/images/cursos/angular.png",
            palabrasClaves: "angular, lorem, impsum",
            calificacion: 4,
            duracion: 5,
            precio: 14,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "intermedio",
            acronimo: "api-rest",
            clasificacion: "Taller",
            titulo: "Taller de ApiRest",
            image: "./assets/images/cursos/api-rest.png",
            palabrasClaves: "api, rest, lorem, impsum",
            calificacion: 3,
            duracion: 7,
            precio: 14,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "avanzado",
            acronimo: "assembly",
            clasificacion: "Especialidad",
            titulo: "Especialidad de Assembly",
            image: "./assets/images/cursos/assembly.png",
            palabrasClaves: "assembly, lorem, impsum",
            calificacion: 4,
            duracion: 8,
            precio: 14,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },{
            Nivel: "intermedio",
            acronimo: "bootstrap",
            clasificacion: "Taller",
            titulo: "Taller de Bootstrap",
            image: "./assets/images/cursos/bootstrap.png",
            palabrasClaves: "bootstrap, lorem, impsum",
            calificacion: 4,
            duracion: 10,
            precio: 12,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "intermedio",
            acronimo: "cplusplus",
            clasificacion: "Especialidad",
            titulo: "Especialidad de C++",
            image: "./assets/images/cursos/cplusplus.png",
            palabrasClaves: "c++, lorem, impsum",
            calificacion: 4,
            duracion: 3,
            precio: 12,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "intermedio",
            acronimo: "csharp",
            clasificacion: "Taller",
            titulo: "Taller de C#",
            image: "./assets/images/cursos/csharp.png",
            palabrasClaves: "c#, csharp, lorem, impsum",
            calificacion: 4,
            duracion: 15,
            precio: 8,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },{
            Nivel: "intermedio",
            acronimo: "css",
            clasificacion: "Especialidad",
            titulo: "Especialidad de CSS",
            image: "./assets/images/cursos/css.png",
            palabrasClaves: "css, lorem, impsum",
            calificacion: 4,
            duracion: 12,
            precio: 6,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "intermedio",
            acronimo: "datascience",
            clasificacion: "Especialidad",
            titulo: "Especialidad de Data Science",
            image: "./assets/images/cursos/datascience.png",
            palabrasClaves: "data, science, lorem, impsum",
            calificacion: 4,
            duracion: 6,
            precio: 6,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "intermedio",
            acronimo: "flutter",
            clasificacion: "Taller",
            titulo: "Taller de Flutter",
            image: "./assets/images/cursos/flutter.png",
            palabrasClaves: "flutter, lorem, impsum",
            calificacion: 4,
            duracion: 6,
            precio: 25,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },{
            Nivel: "intermedio",
            acronimo: "go",
            clasificacion: "Taller",
            titulo: "Taller de Go",
            image: "./assets/images/cursos/go.png",
            palabrasClaves: "go, lorem, impsum",
            calificacion: 4,
            duracion: 7,
            precio: 20,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "intermedio",
            acronimo: "graphql",
            clasificacion: "Curso",
            titulo: "Curso de GraphQl",
            image: "./assets/images/cursos/graphql.png",
            palabrasClaves: "graphql, lorem, impsum",
            calificacion: 4,
            duracion: 7,
            precio: 20,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "avanzado",
            acronimo: "html",
            clasificacion: "Curso",
            titulo: "Curso de HTML",
            image: "./assets/images/cursos/html.png",
            palabrasClaves: "html, lorem, impsum",
            calificacion: 4,
            duracion: 7,
            precio: 10,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },{
            Nivel: "avanzado",
            acronimo: "java",
            clasificacion: "Curso",
            titulo: "Curso de Java",
            image: "./assets/images/cursos/java.png",
            palabrasClaves: "java, lorem, impsum",
            calificacion: 4,
            duracion: 8,
            precio: 10,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "avanzado",
            acronimo: "javascript",
            clasificacion: "Curso",
            titulo: "Curso de JavaScript",
            image: "./assets/images/cursos/javascript.png",
            palabrasClaves: "javascript, lorem, impsum",
            calificacion: 4,
            duracion: 10,
            precio: 12,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "avanzado",
            acronimo: "machine-learning",
            clasificacion: "Curso",
            titulo: "Curso de Machine Learning",
            image: "./assets/images/cursos/machine-learning.png",
            palabrasClaves: "machine, learning, lorem, impsum",
            calificacion: 4,
            duracion: 10,
            precio: 18,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },{
            Nivel: "avanzado",
            acronimo: "mongodb",
            clasificacion: "Curso",
            titulo: "Curso de MongoDB",
            image: "./assets/images/cursos/mongodb.png",
            palabrasClaves: "mongodb, lorem, impsum",
            calificacion: 4,
            duracion: 5,
            precio: 18,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "avanzado",
            acronimo: "nodejs",
            clasificacion: "Curso",
            titulo: "Curso de NodeJS",
            image: "./assets/images/cursos/nodejs.png",
            palabrasClaves: "nodejs, lorem, impsum",
            calificacion: 4,
            duracion: 5,
            precio: 15,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "avanzado",
            acronimo: "nodejs-express",
            clasificacion: "Curso",
            titulo: "Curso de NodeJS con Express",
            image: "./assets/images/cursos/nodejs-express.png",
            palabrasClaves: "nodejs, express, lorem, impsum",
            calificacion: 4,
            duracion: 12,
            precio: 5,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },{
            Nivel: "avanzado",
            acronimo: "oracledb",
            clasificacion: "Especialidad",
            titulo: "Especialidad de OracleDB",
            image: "./assets/images/cursos/oracledb.png",
            palabrasClaves: "oracledb, lorem, impsum",
            calificacion: 4,
            duracion: 11,
            precio: 9,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "avanzado",
            acronimo: "pseint",
            clasificacion: "Especialidad",
            titulo: "Especialidad de PSeInt",
            image: "./assets/images/cursos/pseint.png",
            palabrasClaves: "pseint, lorem, impsum",
            calificacion: 4,
            duracion: 9,
            precio: 7,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "básico",
            acronimo: "pug",
            clasificacion: "Especialidad",
            titulo: "Especialidad de Pug",
            image: "./assets/images/cursos/pug.png",
            palabrasClaves: "pug, lorem, impsum",
            calificacion: 4,
            duracion: 4,
            precio: 8,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },{
            Nivel: "básico",
            acronimo: "python",
            clasificacion: "Especialidad",
            titulo: "Especialidad de Python",
            image: "./assets/images/cursos/python.png",
            palabrasClaves: "python, lorem, impsum",
            calificacion: 4,
            duracion: 3,
            precio: 12,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "básico",
            acronimo: "react",
            clasificacion: "Curso",
            titulo: "Curso de ReactJS",
            image: "./assets/images/cursos/react.png",
            palabrasClaves: "react, lorem, impsum",
            calificacion: 4,
            duracion: 3,
            precio: 14,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "básico",
            acronimo: "sass",
            clasificacion: "Curso",
            titulo: "Curso de SASS",
            image: "./assets/images/cursos/sass.png",
            palabrasClaves: "sass, lorem, impsum",
            calificacion: 4,
            duracion: 3,
            precio: 20,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },{
            Nivel: "básico",
            acronimo: "typescript",
            clasificacion: "Curso",
            titulo: "Curso de TypeScript",
            image: "./assets/images/cursos/typescript.png",
            palabrasClaves: "typescript, lorem, impsum",
            calificacion: 4,
            duracion: 10,
            precio: 20,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "vlX173uBM30eWrCltK7D",
                name: "Luis Solano",
                photo: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo"
            }
        },{
            Nivel: "básico",
            acronimo: "vim",
            clasificacion: "Taller",
            titulo: "Taller de Vim",
            image: "./assets/images/cursos/vim.png",
            palabrasClaves: "vim, lorem, impsum",
            calificacion: 4,
            duracion: 12,
            precio: 15,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "l5DyIjILRp6qsYjmLTIi",
                name: "Elvin Josue",
                photo: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no"
            }
        },{
            Nivel: "básico",
            acronimo: "vue",
            clasificacion: "Taller",
            titulo: "Taller de VueJS",
            image: "./assets/images/cursos/vue.png",
            palabrasClaves: "vue, lorem, impsum",
            calificacion: 4,
            duracion: 5,
            precio: 15,
            descripcionC: "Lorem Impsum dolor",
            descripcionL: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            lanzamiento: "21 de julio del 2021",
            profesor: {
                id: "6yOfwSoZXyT6wOZ7RRHRARxjFs33",
                name: "XxLuisFer15xX",
                photo: "https://lh3.googleusercontent.com/a-/AOh14GjQX1ptzk-_xdnzKO_ezxObTWTfUTKG_a1OMK-a=s96-c"
            }
        },
    ]

    for (let i = 0; i < newCursos.length; i++) {
        const newCurso = newCursos[i];
        console.log(newCurso);
        // const doc = await db.collection("Cursos").add(newCurso);
        // console.log(doc.id);
    }
};

/* 
    {
        cursos: [{
            id: 'KJAHFK324KKN241',
            titulo: 'firebase',
            image: 'https:/url/',
            lanzamiento: '05 de julio de 2021',
            clasificacion: 'especialidad',
            duracion: 5,
            Nivel: 'básico',
            descripcionC: 'Lorem 10',
            descripcionL: 'Lorem 50',
            palabrasClaves: 'Lorem 3',
            calificacion: 4,
            profesor: {
                id: 'ADFASDF1',
                name: 'Luis Solano',
                photo: 'https:/url/'
            }
        },{
            id: 'KJAHFK324KKN242',
            titulo: 'SQlServer',
            image: 'https:/url/',
            lanzamiento: '04 de julio de 2021',
            clasificacion: 'taller',
            duracion: 4,
            Nivel: 'intermedio',
            descripcionC: 'Lorem 10',
            descripcionL: 'Lorem 50',
            palabrasClaves: 'Lorem 3',
            calificacion: 5,
            profesor: {
                id: 'ADFASDF1',
                name: 'Luis Solano',
                photo: 'https:/url/'
            },
            precio: 10
        }],
        active: null,
        active: {
            id 'KJAHFK324KKN242',
            title: 'firebase',
            lanzamiento: '05 de julio de 2021'
            clasificacion: 'especialidad'
            duracion: 5
            Nivel: 'básico'
            descripcionC: 'Lorem 10'
            descripcionL: 'Lorem 50'
            palabrasClaves: 'Lorem 3'
            calificacion: 4
        }
    }
*/
const initialState = {
    cursos: [{
        id: 'KJAHFK324KKN241',
        titulo: 'firebase',
        image: './assets/images/firebase.png',
        lanzamiento: '05 de julio de 2021',
        clasificacion: 'especialidad',
        duracion: 5,
        Nivel: 'básico',
        descripcionC: 'Lorem 10',
        descripcionL: 'Lorem 50',
        palabrasClaves: 'Lorem 3',
        calificacion: 4,
        profesor: {
            id: 'ADFASDF1',
            name: 'Luis Solano',
            photo: 'https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo'
        },
        precio: 10
    },{
        id: 'KJAHFK324KKN242',
        titulo: 'SQlServer',
        image: './assets/images/sqlserver.png',
        lanzamiento: '04 de julio de 2021',
        clasificacion: 'taller',
        duracion: 4,
        Nivel: 'intermedio',
        descripcionC: 'Lorem 10',
        descripcionL: 'Lorem 50',
        palabrasClaves: 'Lorem 3',
        calificacion: 5,
        profesor: {
            id: 'ADFASDF2',
            name: 'Elvin Josue',
            photo: 'https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no'
        },
        precio: 15
    }],
    active: null
}

export const cursosReducer = ( state=initialState, action ) => {
    switch (action.type) {
        
        default:
            return state;
    }
}
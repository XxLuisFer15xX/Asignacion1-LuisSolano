const initialState = {
	comentarios: [
		{
			id: "CJAHFK324KKN241",
			idCurso: "KJAHFK324KKN241",
			name: "Luis Solano",
			image: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo",
			comentario: "Lorem 50 comentario para el curso 1",
			calificacion: 4
		},
		{
			id: "CJAHFK324KKN242",
			idCurso: "KJAHFK324KKN241",
			name: "Elvin Josue",
			image: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no",
			comentario: "Lorem 40 comentario para el curso 1",
			calificacion: 5
		},
		{
			id: "CJAHFK324KKN243",
			idCurso: "KJAHFK324KKN242",
			name: "Luis Solano",
			image: "https://lh3.googleusercontent.com/ogw/ADea4I5pXWQp2CLXz9gJDwQXtuEDJ4AoaLj_78JrHoHqPA=s83-c-mo",
			comentario: "Lorem 50 comentario para el curso 2",
			calificacion: 4
		},
		{
			id: "CJAHFK324KKN244",
			idCurso: "KJAHFK324KKN242",
			name: "Elvin Josue",
			image: "https://lh3.googleusercontent.com/a-/AOh14Gh7uAtDoyjIAze4nErjEZyRHUyBjHhjoFHTPh71=s272-p-k-rw-no",
			comentario: "Lorem 40 comentario para el curso 2",
			calificacion: 5
		},
	]
};

export const comentariosReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

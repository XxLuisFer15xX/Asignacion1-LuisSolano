export const loadCursos = async () => {
    const url = `https://us-central1-applandschool.cloudfunctions.net/app/api/get/cursos`
    const resp = await fetch( url, {
        headers: {
            'Authorization': 'Bearer ',
            'Content-Type': 'application/json'
        },
        method:'GET',
        dataType: 'json'
    });
    const data = await resp.json();

    return data;
}
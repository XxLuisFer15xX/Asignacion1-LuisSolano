export const loadComentarios = async () => {
    const url = `https://us-central1-applandschool.cloudfunctions.net/app/api/get/comentarios`
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
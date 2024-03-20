const enviarPost = async () => {

    const postBody = {
        title: 'Ejemplo de titulo',
        body: 'Ejemplo de texto dentro de la publicacion',
        userId: 10,
    }

    const todos = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });
    const todosJson = await todos.json();
    console.log(todosJson)
}
enviarPost();
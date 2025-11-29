const url = 'https://jsonplaceholder.typicode.com/users';
//Ejercicio 5
fetch(url)
    .then(response => {
        if (!response.ok) throw new Error('Error');
        return response.json();
    })
    .then(usuarios => {
        usuarios.forEach(usuario => {
            console.log(usuario.name);
        });
    })
    .catch(error => {
        console.error(error);
    });
//Ejercicio 6
async function cargarUsuarios() {
    console.log("Ahora con async/await")
    try {
        const response = await fetch(url);
        const usuarios = await response.json();

        usuarios.forEach(usuario => {
            console.log(usuario.name);
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

cargarUsuarios();
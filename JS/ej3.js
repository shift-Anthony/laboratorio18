function cargarUsuarioPromesas() {
    const url = "https://jsonplaceholder.typicode.com/users/10";

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP! estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Nombre:", data.name);
            console.log("Username:", data.username);
            console.log("Email:", data.email);
        })
        .catch(error => {
            console.error("Error al cargar el usuario 10:", error);
        });
}

cargarUsuarioPromesas();
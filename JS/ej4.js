async function cargarUsuarioAsync() {
    const url = "https://jsonplaceholder.typicode.com/users/10";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
        }

        const data = await response.json();
        console.log("Nombre:", data.name);
        console.log("Username:", data.username);
        console.log("Email:", data.email);

    } catch (error) {
        console.error("Error al cargar el usuario 10:", error);
    }
}
cargarUsuarioAsync();
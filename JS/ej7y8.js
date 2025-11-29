const url = 'https://jsonplaceholder.typicode.com/users/2';

//Ejercicio 7
const btnPromesa = document.getElementById('btnPromesa');
const tabla1 = document.getElementById('tabla1');

btnPromesa.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            tabla1.innerHTML = `
                            Nombre: ${data.name}<br>
                            Email: ${data.email}<br>
                            Ciudad: ${data.address.city}`;
        })
        .catch(err => console.error(err));
});

//Ejercicio 8
const btnAsync = document.getElementById('btnAsync');
const tabla2 = document.getElementById('tabla2');

btnAsync.addEventListener('click', async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        tabla2.innerHTML = `
                            Nombre: ${data.name}<br>
                            Email: ${data.email}<br>
                            Ciudad: ${data.address.city}`;
    } catch (err) {
        console.error(err);
    }
});
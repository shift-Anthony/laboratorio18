//Ejercicio 10
const input = document.getElementById('input-ej10')
const btn = document.getElementById('btn-ej10');
const resultado = document.getElementById('resultado');

const regexEj10 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

btn.addEventListener('click', () => {
    if (regexEj10.test(input.value)) {
        resultado.textContent = "Contraseña Fuerte";
    } else {
        resultado.textContent = "Contraseña Débil";
    }
});
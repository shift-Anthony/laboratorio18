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
//Ejercicio 11
const btnEj11 = document.getElementById('btn-ej11');
const inputEj11 = document.getElementById('input-ej11');
const resultadoEj11 = document.getElementById('resultado-ej11');

const regexEj11 = /https:\/\/[a-zA-Z0-9.-]+(?:\/[^\s]*)?/g;

btnEj11.addEventListener('click', () => {
    const encontrados = inputEj11.value.match(regexEj11);
    if (encontrados) resultadoEj11.innerHTML = "Encontradas:<br>" + encontrados.join('<br>');
    else resultadoEj11.textContent = "No hay URLs seguras (https).";

});
//Ejercicio 12
const btnEj12 = document.getElementById('btn-ej12');
const inputEj12 = document.getElementById('input-ej12');
const resultadoEj12 = document.getElementById('resultado-ej12');

const regexHtml = /<[^>]+>/g;

btnEj12.addEventListener('click', () => {
    const textoLimpio = inputEj12.value.replace(regexHtml, "");
    resultadoEj12.textContent = "Texto limpio: " + textoLimpio;
});
//Ejercicio 13
const btnEj13 = document.getElementById('btn-ej13');
const inputEj13 = document.getElementById('input-ej13');
const resultadoEj13 = document.getElementById('resultado-ej13');

const regexDivision = /[.?!]+\s*/;

btnEj13.addEventListener('click', () => {

    const oraciones = inputEj13.value.split(regexDivision).filter(oracion => oracion.length > 0);

    resultadoEj13.textContent = JSON.stringify(oraciones, null, 2);

});

import { sumar, restar } from './sumaResta.js';
import multiplicar, { dividir } from './multiplicacionDivision.js';

console.log("Suma (10 + 5):", sumar(10, 5));
console.log("Resta (10 - 5):", restar(10, 5));
console.log("Multiplicación (10 * 5):", multiplicar(10, 5));

try {
    console.log("División (10 / 2):", dividir(10, 2));
} catch (error) {
    console.error("Error en división:", error.message);
}
//Division por cero
try {
    console.log("Division (10 / 0):")
    console.log(dividir(10, 0));
} catch (error) {
    console.error(error.message);
}
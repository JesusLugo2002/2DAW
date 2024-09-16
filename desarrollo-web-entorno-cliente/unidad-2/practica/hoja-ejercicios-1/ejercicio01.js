/* Implementar el control de 3 variables (a, b, c) para que se muestre un mensaje de error cuando se
produzca alguna de las siguientes situaciones:
a) Al menos una de las 3 variables es negativa
b) Las tres variables son iguales a 0
c) Las suma de las 3 variables es mayor que 10 Y las tres variables son diferentes */

let a = 2;
let b = 3;
let c = 1;

if (a < 0 || b < 0 || c < 0) {
    console.error("¡Una de las variables es negativa!")
} else if (a == b && b == c && c == 0) {
    console.error("¡Todas las variables son iguales a cero!")
} else if (a + b + c > 10 && a != b && b != c) {
    console.error("¡La suma de las tres variables es mayor a 10 y los valores son diferentes!")
} else {
    console.log("El programa ha finalizado sin errores :)")
}
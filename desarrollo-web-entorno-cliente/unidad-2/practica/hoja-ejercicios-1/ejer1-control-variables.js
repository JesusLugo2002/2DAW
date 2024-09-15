let a = 0;
let b = 0;
let c = 0;

if (a < 0 || b < 0 || c < 0) {
    console.error("¡Una de las variables es negativa!")
} else if (a == b && b == c && c == 0) {
    console.error("¡Todas las variables son iguales a cero!")
} else if (a + b + c > 10 && a != b && b != c) {
    console.error("¡La suma de las tres variables es mayor a 10 y los valores son diferentes!")
} else {
    console.log("El programa ha finalizado sin errores ;)")
}
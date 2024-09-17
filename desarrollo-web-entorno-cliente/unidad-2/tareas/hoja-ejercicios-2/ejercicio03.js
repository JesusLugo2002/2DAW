/* Implementar una función que dados dos números, nos escriba el resultado de la suma con console.log 
usando 4 formas diferentes (lista de argumentos, concatenación de strings, marcadores de posición y plantillas). */

function sum(a, b) {
    // Lista de argumentos
    console.log(a + b)
    // Concatenación de strings
    console.log('La suma de ' + a + ' + ' + b + ' es igual a ' + (a + b))
    // Marcadores de posición
    console.log('La suma de %d + %d es igual a %d', a, b, a + b)
    // Plantillas
    console.log(`La suma de ${a} + ${b} es igual a ${a + b}`)
}

sum(10, 2)
/* Escribir una función que dados dos números, nos devuelva la división del primero entre el 
segundo si el resultado es un valor númerico, y, si no, que indique dónde está el problema 
(resultado es infinito, el númerador o el denominador no eran números, o estaban indefinidos, etc.) */

function divide(a, b) {
    if (typeof(a) == 'number' && typeof(b) == 'number') {
        if (b === 0) {
            console.error('ERROR: No puedes dividir por cero')
        } else {
            console.log(a / b)
            return a / b
        }
    } else {
        console.error('ERROR: Alguno de los argumentos no son numéricos o no están definidos')
    }
}

divide(7, 3)
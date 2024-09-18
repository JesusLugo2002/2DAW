/* Escribir una función que busque la cadena "arriba" en un texto. La función 
deberá informar si encuentra o no esta cadena en el texto y, si la encuentra, nos deberá 
mostrar el texto reemplazando "arriba" por "abajo". */

function replaceArriba(text) {
    if (text.search(/arriba/) != -1) {
        console.log('Se ha encontrado la palabra "arriba" en la frase. Se modifica la frase:')
        console.log(text.replace(/arriba/g, 'abajo'))
    }
}

replaceArriba('José va hacia arriba cuando camina al colegio.')
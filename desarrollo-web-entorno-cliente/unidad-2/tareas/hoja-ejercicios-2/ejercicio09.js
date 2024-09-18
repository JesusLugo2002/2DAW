/* Implementar una función que dado un texto, nos indique si todas las 
letras son minúsculas o mayúsculas, o una combinación de ambas. */

function identifyLetterCase(text) {
    let lowercase_text = text.toLowerCase()
    let uppercase_text = text.toUpperCase()
    if (text === lowercase_text) {
        console.log('Todas las letras del texto dado son minúsculas.')
    } else if (text === uppercase_text) { 
        console.log('Todas las letras del texto dado son mayúsculas.')
    } else {
        console.log('Hay letras mayúsculas y minúsculas en el texto dado.')
    }
}

identifyLetterCase('hola como estas')
identifyLetterCase('PABLITO COMPRO UN CLAVITO')
identifyLetterCase('MiRa CoMo EsCrIbO')
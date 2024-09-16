/* Realizar una función que indicando un texto y un carácter 
(ambos obligatorios, comprobar que el segundo parámetro es realmente un único caracter), 
nos diga cuántas veces aparece el carácter en el texto. */

function count_char(text, char) {
    let count = 0
    if (char.length > 1) {
        console.error("El argumento 'char' debe ser solo un carácter!")
        return
    } else {
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) === char) {
                count++;
            }
        }
    }
    return count
}

console.log(count_char('Holaaa', 'a'))
/* Realizar una función en JS que dado un DNI (comprobar que es un número entre 0 y 99999999), 
devuelva la letra asociado al mismo. Esta letra se calcula como el módulo (resto) de la 
división del número del DNI entre 23, y a partir del resto se escoge una de las siguientes letras 
según la posición: TRWAGMYFPDXBNJZSQVHLCKET. Por ejemplo, para el DNI 12345678, al dividir entre 23 
se obtiene comor resto 14, por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z. */

function getDniLetter(dni) {
    const LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKET'
    let position = dni % 23
    return LETTERS.charAt(position)
}

console.log(getDniLetter(12345678)) // Devuelve 'Z'
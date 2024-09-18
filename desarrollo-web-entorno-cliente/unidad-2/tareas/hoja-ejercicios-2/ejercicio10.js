/* Diseñar una función que detecte palíndromos, es decir, frases que se lean igual de izquierda 
a derecha o de derecha a izquierda. Por ejemplo: "Roma ni se conoce sin oro ni se conoce sin amor". */

function isPalindrome(text) {
    let fixed_text = text.toLowerCase().replace(/ /g, '')
    let reverse_text = fixed_text.split('').reverse().join('')
    if (fixed_text === reverse_text) {
        console.log('El texto dado SÍ es un palíndromo.')
    } else {
        console.log('El texto dado NO es un palíndromo.')
    }
}

isPalindrome("Roma ni se conoce sin oro ni se conoce sin amor")
isPalindrome('Hola como estas')
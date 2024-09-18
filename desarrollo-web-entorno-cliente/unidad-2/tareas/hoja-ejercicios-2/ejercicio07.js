/* Realizar una función que dado un texto, lo convierta a minúscula y elimine los 
espacios iniciales y finales, y devuelva la suma de los siguientes puntos:
+1 si el texto empieza por "el" o por "la"
+10 si el texto finaliza en gerundio ("ando", "endo")
+100 si el texto contiene al menos una vez la preposición "con" directamente entre otras dos palabras. */

function lowerPlus(text) {
    let score = 0
    let new_text = text.toLowerCase().trim()
    if (new_text.search(/(^la)|(^el)/) != -1) {
        score += 1
    }
    if (new_text.search(/(ando$)|(endo$)/) != -1) {
        score += 10
    }
    if (new_text.search(/.+ con .+/) != -1) {
        score += 100
    }
    return [new_text, score]
}

console.log(lowerPlus('   La casa con Miranda va CaminanDo  '))
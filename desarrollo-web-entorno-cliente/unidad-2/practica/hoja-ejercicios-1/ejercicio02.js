/* Diseñar una función que acepta un argumento x y que muestre los siguientes mensajes:
a) ‘Este es muy fácil… ¡prueba otro!’, si x es 0
b) ‘El número es par’, si x es 2, 4 ó 6
c) ‘El número es impar’, si x es 1, 3 ó 5
d) ‘¡¡Sólo sé contar de 0 a 6!!’, para los demás casos */

function analize_number(x) {
    if (x == 0) {
        console.log("Este es muy fácil... ¡prueba otro!")
    } else if (x == 2 || x == 4 || x == 6) {
        console.log("El número es par")
    } else if (x == 1 || x == 3 || x == 5) {
        console.log("El número es impar")
    } else {
        console.log("¡¡Solo sé contar del 0 a 6!!")
    }
}

analize_number(0)
analize_number(2)
analize_number(3)
analize_number(9)
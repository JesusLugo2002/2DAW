function analize_number(x) {
    if (x == 0) {
        alert("Este es muy fácil... ¡prueba otro!")
    } else if (x == 2 || x == 4 || x == 6) {
        alert("El número es par")
    } else if (x == 1 || x == 3 || x == 5) {
        alert("El número es impar")
    } else {
        alert("¡¡Solo sé contar del 0 a 6!!")
    }
}

analize_number(4)
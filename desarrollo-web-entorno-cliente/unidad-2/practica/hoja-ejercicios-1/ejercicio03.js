/* Realizar un bucle for que actualice una variable i y otra j de la siguiente forma:
 1) i comienza en 0, j comienza en 20
 2) El bucle debe parar cuando i sea mayor que 8 ó j sea menor que 0
 3) i se incrementa de 1 en 1, j se decrementa de 3 en 3
 4) Dentro del bucle sólo puede estar la sentencia console.log(i, j) */

for (let i = 0, j = 20; i <= 8 || j >= 0; i++, j -= 3) {
    console.log(i, j)
}
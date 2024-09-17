/* Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, 
mostrar un mensaje de error si no se indica, luego se pueden indicar tantos argumentos como desee el usuario) 
y que devuelva la suma y la media de todos los elementos. Comprobar que todos los argumentos sean números e ignorar 
los que no lo sean, mostrando un aviso (por ejemplo: ¡AVISO! El argumento número 3 "Hola" no es un número, lo ignoramos"). */

function sum_and_avg(...numbers) {
    let sum = 0, avg = 0, count = 0
    if (numbers.length < 1) {
        console.error("ERROR: El primer argumento debe ser obligatorio")
        return
    } else {
        for (let i = 0; i < numbers.length; i++) {
            if (typeof(numbers[i]) == 'number') {
                sum += numbers[i]
                count += 1
            } else {
                console.warn('¡AVISO! El argumento número ' + i + ' "' + numbers[i] + '" no es un número, lo ignoramos.')
            }
        }
        avg = sum / count
    }
    return {'Suma': sum, 'Media': avg}
}

console.log(sum_and_avg(5, 'A', 6, 4, 'C'))
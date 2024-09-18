/* 01. Crear una función que genere un array aleatorio, usando 3 parámetros: número de elementos (por
defecto 10, valor mínimo del elemento (por defecto 100), valor máximo (por defecto 200) */

function generateRandomArray(num_items = 10, min_value = 100, max_value = 200) {
    let result = []
    for (let i = 0; i < num_items; i++) {
        let value = Math.floor(Math.random() * (max_value - min_value + 1) + min_value)
        result.push(value)
    }
    return result
}

/* 02. Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos entre 20 y 100 y 
luego ordenarlo. */

let sorted_array = generateRandomArray(20, 20, 100).sort()
console.log('\nEjercicio 02 - Ordenar array aleatorio')
console.log(sorted_array)

/* 03. Crear una función que mezcle los elementos de un array en orden aleatorio. Probar con el array 
ordenado creado en el ejercicio anterior */

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

let shuffled_array = shuffleArray(sorted_array)
console.log('\nEjercicio 03 - Barajar array ordenado')
console.log(shuffled_array)

/* 04. Recorrer un array aleatorio generado con la función del ejercicio 1 (15 elementos entre -10 y 20) 
y para cada elemento x, gestionar un nuevo array de la siguiente forma:
 • x <= -5: Eliminar el primer elemento del array
 •-5 < x <= 0: Eliminar el último elemento del array
 • 0 < x <=  10: Añadir x al principio del array
 • 10 < x <=  10: Añadir x al final del array
 Mostrar un mensaje de texto para cada número indicando el valor de x, la operación realizada 
(eliminar o añadir, al principio o al final), el número añadido/eliminado y el tamaño del array tras 
realizar la operación */

console.log('\nEjercicio 04 - Modificar array nuevo en base al valor')
let random_array = generateRandomArray(15, -10, 20)
let new_array = Array.from(random_array)
for (let value of random_array) {
    if (value <= -5) {
        console.log(`Valor: ${value} - Se elimina primer elemento: ${new_array.shift()} - Tamaño de array actual: ${new_array.length}`)
    } else if (-5 < value <= 0) {
        console.log(`Valor: ${value} - Se elimina último elemento: ${new_array.pop()} - Tamaño de array actual: ${new_array.length}`)
    } else if (0 < value <= 10) {
        console.log(`Valor: ${value} - Se añade valor como primer elemento - Tamaño de array actual: ${new_array.unshift(value)}`)
    } else if (10 < value <= 15) {
        new_array[new_array.length - 1] = value
        console.log(`Valor: ${value} - Se añade valor como último elemento - Tamaño de array actual: ${new_array.length}`)
    } 
}

/* 05. Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada 
elemento. Probar con un array aleatorio de 20 números entre 60 y 100. */

function sqrtArray(array) {
    let new_array = []
    for (let value of array) {
        new_array.push(parseFloat(Math.sqrt(value).toFixed(2)))
    }
    return new_array
}

console.log('\nEjercicio 05 - Array con raices cuadradas')
random_array = generateRandomArray(20, 60, 100)
console.log(random_array)
let sqrt_array = sqrtArray(random_array)
console.log(sqrt_array)

/* 06. Crear una función que devuelva el valor máximo y mínimo del array, e indique el índice de estos 
valores (si el valor se repite, informar sólo sobre la primera vez que aparezca). Probar con un array 
aleatorio de 20 números entre -100 y 100. */

function minMaxValues(array) {
    let max_index = 0
    let min_index = 0
    let max_value = array[0]
    let min_value = array[0]
    for (let index = 0; index < array.length; index++) {
        if (array[index] > max_value) {
            max_value = array[index]
            max_index = index
        }
        if (array[index] < min_value) {
            min_value = array[index]
            min_index = index
        }
    }
    return {min_value: min_value, min_index: min_index, max_value: max_value, max_index: max_index}   
}

console.log('\nEjercicio 06 - Valores minimos y máximos de array')
random_array = generateRandomArray(20, -100, 100)
console.log(random_array)
console.log(minMaxValues(random_array))

/* 07. Crear un array de 50 números aleatorios enteros aleatorios entre 10 y 20. Para cada elemento, 
informar si es la primera vez que aparece, o si se trata de un elemento repetido */

console.log('\nEjercicio 07 - Chequear nuevos numeros')
random_array = generateRandomArray(50, 10, 20)
let checked_values = []
for (let value of random_array) {
    if (!checked_values.includes(value)) {
        console.log(`El valor ${value} aparece por primera vez!`)
        checked_values.push(value)
    }
}

/* 08. Modificar el ejercicio anterior para que si el número ya existía, nos indique cuántas veces había 
aparecido con anterioridad. */

console.log('\nEjercicio 08 - Chequear nuevos numeros contando repetidos')
random_array = generateRandomArray(50, 10, 20)
checked_values = []
for (let value of random_array) {
    if (!checked_values.includes(value)) {
        console.log(`El valor ${value} aparece por primera vez!`)
    } else {
        let count = checked_values.filter(x => x == value).length
        console.log(`El valor ${value} ya apareció antes ${count} veces.`)
    }
    checked_values.push(value)
}
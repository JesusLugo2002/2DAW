/* Implementar una función que procese una línea CSV (Comma-Separated Values). 
El primer parámetro es el texto (por defecto vacío) y el segundo es el separador o delimitador 
(por defecto una coma ",", pero el usuario podría indicar cualquier otro). Por ejemplo, 
la salida de la línea "coche|rojo|10 años|diesel|5 puertas" usando como delimitador "|", sería similar a la siguiente:

    Se han detectado 5 elementos:
    Elemento 1: coche
    Elemento 2: rojo
    Elemento 3: 10 años
    Elemento 4: diesel
    Elemento 5: 5 puertas
*/

function csvSplit(text = '', delimiter = ',') {
    let text_splitted = text.split(delimiter)
    console.log(`Se han detectado ${text_splitted.length} elementos`)
    for (let index in text_splitted) {
        console.log(`Elemento ${++index}: ${text_splitted[--index]}`)
    }
}

csvSplit("coche|rojo|10 años|diesel|5 puertas", '|')

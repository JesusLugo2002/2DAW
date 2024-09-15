1. Realizar una función que indicando un texto y un carácter (ambos obligatorios, comprobar que el segundo parámetro es realmente un único caracter), nos diga cuántas veces aparece el carácter en el texto.

2. Escribir una función que acepte al menos un argumento (el primer argumento debe ser obligatorio, mostrar un mensaje de error si no se indica, luego se pueden indicar tantos argumentos como desee el usuario) y que devuelva la suma y la media de todos los elementos. Comprobar que todos los argumentos sean números e ignorar los que no lo sean, mostrando un aviso (por ejemplo: ¡AVISO! El argumento número 3 "Hola" no es un número, lo ignoramos").

3. Implementar una función que dados dos números, nos escriba el resultado de la suma con console.log usando 4 formas diferentes (lista de argumentos, concatenación de strings, marcadores de posición y plantillas).
 
4. Escribir una función que dados dos números, nos devuelva la división del primero entre el segundo si el resultado es un valor númerico, y, si no, que indique dónde está el problema (resultado es infinito, el númerador o el denominador no eran números, o estaban indefinidos, etc.)
 
5. Realizar una función en JS que dado un DNI (comprobar que es un número entre 0 y 99999999), devuelva la letra asociado al mismo. Esta letra se calcula como el módulo (resto) de la división del número del DNI entre 23, y a partir del resto se escoge una de las siguientes letras según la posición: TRWAGMYFPDXBNJZSQVHLCKET. Por ejemplo, para el DNI 12345678, al dividir entre 23 se obtiene comor resto 14, por lo que le corresponde la letra 'Z', siendo el DNI correcto 12345678Z.

6. Implementar una función que procese una línea CSV (Comma-Separated Values). El primer parámetro es el texto (por defecto vacío) y el segundo es el separador o delimitador (por defecto una coma ",", pero el usuario podría indicar cualquier otro). Por ejemplo, la salida de la línea "coche|rojo|10 años|diesel|5 puertas" usando como delimitador "|", sería similar a la siguiente:
         Se han detectado 5 elementos:
         Elemento 1: coche
         Elemento 2: rojo
         Elemento 3: 10 años
         Elemento 4: diesel
         Elemento 5: 5 puertas

7. Realizar una función que dado un texto, lo convierta a minúscula y elimine los espacios iniciales y finales, y devuelva la suma de los siguientes puntos:
+1 si el texto empieza por "el" o por "la"
+10 si el texto finaliza en gerundio ("ando", "endo")
+100 si el texto contiene al menos una vez la preposición "con" directamente entre otras dos palabras.

8. Escribir una función que busque la cadena "arriba" en un texto. La función deberá informar si encuentra o no esta cadena en el texto y, si la encuentra, nos deberá mostrar el texto reemplazando "arriba" por "abajo".

9. Implementar una función que dado un texto, nos indique si todas las letras son minúsculas o mayúsculas, o una combinación de ambas.

10. Diseñar una función que detecte palíndromos, es decir, frases que se lean igual de izquierda a derecha o de derecha a izquierda. Por ejemplo: "Roma ni se conoce sin oro ni se conoce sin amor".
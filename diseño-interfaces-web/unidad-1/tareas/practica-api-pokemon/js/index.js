// Importamos la clase Pokemon desde el archivo Pokemon.js
import Pokemon from './Pokemon.js';

// Creamos un array para los 151 pokemons que obtendremos desde la API
var pokemons = [];

// Seleccionamos el elemento button del DOM usando querySelector 
const button = document.querySelector("button");
// Agregamos un event listener al botón para que se mantenga a la espera de hacer click en él
// Cuando se recibe el click, se ejecuta la función flecha
button.addEventListener("click", () => {
    // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
    document.querySelector('#button').style.visibility = 'hidden';
    // También cambiamos la visibilidad del elemento #pokedex, y lo mostramos en pantalla
    document.querySelector('#pokedex').style.visibility = 'visible';
    // LLamada a la función startPokedex() que comenzará el proceso de mostrar los Pokemon
    startPokedex();
});

// Función asíncrona que va a realizar operaciones con promesas para realizar la llamada a la API
const startPokedex = async () => {
    // Bucle for que itera desde 1 hasta 151, que son los primeros 151 Pokemon
    for(var i = 1; i <= 151; i++) {
        // Utilizamos fetch para hacer una solicitud a la API donde i representa el número de Pokemon
        await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
            .then(function(result) {
                return result.json();
            // Convertimos la respuesta de la API en un objeto JSON
            }).then(function(result) {
                const data = result;
                const pokemon = new Pokemon (data);
                pushPokemon(pokemon);
                //Guardamos el resultado en data y creamos una nueva instancia de Pokemon con los datos obtenidos
                // almacenamos los resultados en el array
               // console.log(pokemon);
            });
    }
    // Una vez que todos los Pokemon se han añadido al array, llamamos a la función showPokedex
    await showPokedex();
};

// Esta función añade el Pokemon que se le pasa como parámetro al array
function pushPokemon(pokemon) {
    pokemons.push(pokemon);
}

// Esta función se encarga de mostrar en el DOM los Pokemon que se han obtenido y almacenado en el array 
const showPokedex = async () => {
    // Se obtiene una referencia al elemento con el ID pokedex en el DOM donde se insertarán las tarjetas de los Pokemon.
    const pokedex = document.getElementById("pokedex");
    // Iteramos sobre cada elemento del array pokemons
    for(var i = 0; i < pokemons.length; i++) {
        var aux =  0;
        while (aux != pokemons[i].pkm_type.length) {
            if (aux == 0)
                var tipo1 = pokemons[i].pkm_type[aux].type.name;                       
            if (aux == 1)   
                var tipo2 = pokemons[i].pkm_type[aux].type.name;
            else 
                tipo2 = "";          
            aux++; 
        }
        // Para cada Pokemon, se crea una tarjeta con imágenes (vista frontal y trasera), el nombre y los tipos
        // Esta estructura HTML se añade dinámicamente al contenedor pokedex
        pokedex.innerHTML +=    `<div class="card">
                                    <img src="${pokemons[i].pkm_front}">
                                    <img class="front" src="${pokemons[i].pkm_back}"><br>
                                    ${pokemons[i].id}. ${pokemons[i].name}<br>
                                    <div class="measures">
                                    Height: ${pokemons[i].height} - Weight: ${pokemons[i].weight}
                                    </div>
                                    <div class="types">
                                        Types:  ${tipo1} ${tipo2}
                                    </div>
                                </div>`
    }
}

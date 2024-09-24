// Exportamos por defecto la clase Pokemon
export default class Pokemon {
    // Constructor que recibe como parámetro data que contiene los datos de los Pokemon que obtenemos desde la API
    constructor(data) {
        this.name = data.name;                          // Nombre del pokemon
        this.id = data.id;                              // Id del pokemon
        this.pkm_front = data.sprites.front_default;    // Pokemon de frente
        this.pkm_back = data.sprites.back_default;      // Pokemon de espaldas
        this.pkm_type = data.types;                     // Tipo del pokemon (Devuelve un array)
        this.height = data.height;                      // Altura del pokemon
        this.weight = data.weight;                      // Peso del pokemon
    }
}
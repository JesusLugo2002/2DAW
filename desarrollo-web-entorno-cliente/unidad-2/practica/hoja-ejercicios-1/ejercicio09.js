/* Implementar una función que dada una fecha en texto (por ejemplo “2018-09-20”), devuelva la
 fecha juliana equivalente. Para realizar la suma, ten en cuenta que la fecha juliana almacena días,
 mientras que el tiempo_unix en javascript contiene milisegundos, por lo que hay que transformarlo
 en días. Por cierto, ¿de dónde crees que ha salido el valor 2440587.5? */

function get_juliana_date(date_arg) {
    const JULIANA = 2440587.5
    let date = new Date(date_arg)
    let unix_date = date.getTime() / (1000 * 60 * 60 * 24)
    return unix_date + JULIANA
}

console.log(get_juliana_date("2018-09-20"))
/* ¿Cuántos segundos han pasado desde que naciste? ¿y minutos? ¿y horas? ¿y días? Implementar
 una función que dada una fecha cualquiera en formato “yyyy-mm-dd”, devuelva cuánto tiempo ha
 pasado desde esa fecha. La función aceptará un segundo parámetro para indicar en qué unidad se
 quiere obtener el resultado: ‘d’ → días, ‘h’ → horas, ‘m’ → minutos y ‘s’ → segundos. Si no es
 ninguna de estas unidades, se mostrará un error */

function calculate_time_from_date(date, format) {
    let now = new Date()
    let birthdate = new Date(date)
    let time = now - birthdate
    switch (format) {
        case 'd':
            console.log("Han pasado " + Math.round(time / (1000 * 60 * 60 * 24)) + " dias desde " + date)
            break;
        case 'h':
            console.log("Han pasado " + Math.round(time / (1000 * 60 * 60)) + " horas desde " + date)
            break;
        case 'm':
            console.log("Han pasado " + Math.round(time / (1000 * 60)) + " minutos desde " + date)
            break;
        case 's':
            console.log("Han pasado " + Math.round(time / 1000) + " segundos desde " + date)
            break;
        default:
            console.error("ERROR: No se ha reconocido formato para mostrar el tiempo (Debe ser 'd', 'h', 'm' o 's').")
            break;
    }
}

calculate_time_from_date("2024-09-14", 'd')
calculate_time_from_date("2024-09-14", 'h')
calculate_time_from_date("2024-09-14", 'm')
calculate_time_from_date("2024-09-14", 's')
calculate_time_from_date("2024-09-14")
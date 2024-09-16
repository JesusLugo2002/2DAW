/* Implementar una función hdec2hms(x) que transforme una hora en formato decimal a su
equivalente en formato hh:mm:ss (en texto). Por ejemplo, 8.25 = “8:15:00” y 10.12 = “10:07:12”.
Implementar también la función inversa hms2hdec(h,m,s) */

function hdec2hms(x) {
    let hours, minutes, seconds, num_split, minutes_split;
    num_split = new String(x).split('.');
    hours = num_split[0].padStart(2, '0');
    minutes = (num_split[1] * 60) / 100;
    seconds = '00'
    
    if (minutes.toString().includes('.')) {
        minutes_split =  minutes.toString().split('.');
        minutes = minutes_split[0].padStart(2, '0');
        seconds = ((minutes_split[1] * 60) / 100).toString().padEnd(2, '0');
        if (seconds.toString().includes('.')) {
            seconds = seconds.toString().replace('.', '')
        }
    }
    return hours + ':' + minutes + ':' + seconds
}

function hms2hdec(hours, minutes, seconds) {
    return (hours + (minutes / 60) + (seconds / 3600)).toFixed(2)
}

console.log(hdec2hms(8.25))
console.log(hdec2hms(10.12))
console.log(hms2hdec(8, 15, 0))
console.log(hms2hdec(10, 7, 12))
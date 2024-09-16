/* Cuando hablamos de ángulos, normalmente utilizamos los grados sexagesimales (se suelen
representar como “deg”, una circunferencia completa son 360º deg). Sin embargo, en trigonometría
es más común utilizar los radianes (“rad”, una circunferencia completa son 2π rad). De esta forma,
360º equivalen a 2π. Las funciones trigonométricas de javascript, como la mayoría de otros
lenguajes, trabajan en radianes, sin embargo en muchas ocasiones nosotros vamos a querer trabajar
en grados. Por ello, se pide:

a) Implementar una función llamada deg2rad(x) que transforme de grados a radianes, y su
inversa rad2deg(x)

b) Implemtentar una función sinDeg(x)que devuelva el seno del ángulo x y otra función
cosDeg(x) que devuelva el coseno del ángulo x (en ambos casos x está en grados).

c) El seno y el coseno están relacionados por la siguiente ecuación: sin2x + cos2x = 1.
Utilizar esta relación para implementar una función sinDegAlt(x) que obtenga el seno
de un ángulo x (en grados) usando para ello la función cosDeg(x) anteriormente
implementada. Implementar también la función inversa al apartado anterior:
cosDegAlt(x) usando para ello sinDeg(x) */

function deg2rad(x) {
    return x * (Math.PI / 180)
}

function rad2deg(x) {s
    return x * (180 / Math.PI)
}

function sinDeg(x) {
    return Math.sin(deg2rad(x))
}

function cosDeg(x) {
    return Math.cos(deg2rad(x))
}

function sinDegAlt(x) {
    return Math.sqrt(1 - Math.pow(cosDeg(x), 2))
}

function cosDegAlt(x) {
    return Math.sqrt(1 - Math.pow(sinDeg(x), 2))
}
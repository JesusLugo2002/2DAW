"use strict";
// Ejercicio D1S1.1.1
var msg = 'Hola mundo';
$("#output1").text(msg);
var osoPendejo = { name: "Freddy", age: 1.5, nightmare: "Color perú" };
$("#output2").text(JSON.stringify(osoPendejo));
// Ejercicio D1S2.1.1
function attack(weaponName) {
    return weaponName;
}
$("#output3").text("Freddy ataca con una ".concat(attack("cuchara de té")));
// Ejercicio D1S2.1.2
function jump(metters) {
    if (metters) {
        return metters;
    }
    else {
        return 5;
    }
}
$("#output4").text("Freddy salta ".concat(jump(), " metros"));
// Ejercicio D1S2.2.1
var Nightmare = /** @class */ (function () {
    function Nightmare(name) {
        this.name = name;
    }
    Nightmare.prototype.scream = function () {
        return "".concat(this.name.toUpperCase(), " est\u00E1 aqu\u00ED!");
    };
    return Nightmare;
}());
var myNightmare = new Nightmare("Un peruano");
$("#output5").text(myNightmare.scream());
// Ejercicio D1S2.2.2
var AnotherNightmare = /** @class */ (function () {
    function AnotherNightmare(name) {
        var _this = this;
        this.scream = function () {
            return "".concat(_this.name.toUpperCase(), " est\u00E1 aqu\u00ED!");
        };
        this.name = name;
    }
    return AnotherNightmare;
}());
var myAnotherNightmare = new AnotherNightmare("Un chileno");
$("#output6").text(myAnotherNightmare.scream());

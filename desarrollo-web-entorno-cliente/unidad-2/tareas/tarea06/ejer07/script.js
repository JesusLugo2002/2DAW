class Warrior {
    constructor(name, strength, weapon) {
        this.name = name;
        this.strength = strength;
        this.weapon = weapon;
    }
}

class Jedi extends Warrior {
    constructor(name, strength, weapon) {
        super(name, strength, weapon)
    }
}

class Sith extends Warrior {
    constructor(name, strength, weapon) {
        super(name, strength, weapon)
    }
}


const jedi = new Jedi("Raphael Allerti", 300, "Bomba de electro-protones")
const sith = new Sith("Darth Utteit", 250, "Carabina Blaster EE-03")

function getWinner(jedi, sith) {
    return jedi.strength > sith.strength ? jedi.name : sith.name
}

const winner = getWinner(jedi, sith)

document.getElementById("battle-button").addEventListener("click", function() {
    document.getElementById("result-container").textContent = `El ganador de la batalla es ${winner}!`
});
class Spell {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
}

class Mage {
    constructor(name, spell) {
        this.name = name;
        this.spell = spell;
    }
}

const fire_spell = new Spell("Fireball", 100)
const ice_spell = new Spell("Ice Spikes", 150)

const fire_mage = new Mage("Aladin", fire_spell)
const ice_mage = new Mage("Don Helado", ice_spell)

function getWinner(mage1, mage2) {
    return mage1.spell.power > mage2.spell.power ? mage1.name : mage2.name
}

const button = document.getElementById("battle-button")
const resultContainer = document.getElementById("result-container")
button.addEventListener("click", function(e) {
    resultContainer.textContent = `El ganador de la batalla es ${getWinner(fire_mage, ice_mage)}!`
});
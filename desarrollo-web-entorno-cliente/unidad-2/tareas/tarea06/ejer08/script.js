class Superhero {
    constructor(name, power, level) {
        this.name = name
        this.power = power
        this.level = level
    }
}

let winner = "";
const hero1 = new Superhero("Hulk", "Super strength", 300)
const hero2 = new Superhero("Ironman", "Super technology", 150)
const hero3 = new Superhero("Dr. Strange", "Infinity stone", 1000)
const hero4 = new Superhero("Thor", "Lightning control", 600)
const heroes = [hero1, hero2, hero3, hero4]

function getWinner(heroArray) {
    let winner = heroArray[0]
    heroArray.forEach(hero => {
        if (hero.level > winner.level) {
            winner = hero
        }
    });
    return winner
}

document.getElementById("battle-button").addEventListener("click", () => {
    const winner = getWinner(heroes)
    document.getElementById("result-container").textContent = `El ganador de la batalla es ${winner.name} con un nivel de ${winner.level}!`
});
class Gem {
    constructor(name, power) {
        this.name = name
        this.power = power
    }
}

class Thanos {
    constructor() {
        this.gauntlet = [];
    }

    get totalPower() {
        let result = 0;
        this.gauntlet.forEach(gem => {
            result += gem.power;
        });
        return result
    }

    pickGem(gem) {
        this.gauntlet.push(gem);
    }
}

document.getElementById("init").addEventListener("click", function() {

    const gem1 = new Gem("Espacio", 1000)
    const gem2 = new Gem("Mente", 1000)
    const gem3 = new Gem("Realidad", 1000)
    const gem4 = new Gem("Poder", 1000)
    const gem5 = new Gem("Tiempo", 1000)
    const gem6 = new Gem("Alma", 1000)
    
    const thanos = new Thanos()
    thanos.pickGem(gem1)
    thanos.pickGem(gem2)
    thanos.pickGem(gem3)
    thanos.pickGem(gem4)
    thanos.pickGem(gem5)
    thanos.pickGem(gem6)

    alert(`Thanos tiene las gemas de: ${gem1.name}, ${gem2.name}, ${gem3.name}, ${gem4.name}, ${gem5.name} y ${gem6.name}; ahora su poder es de ${thanos.totalPower}!!!`)
});
class Army {
    constructor(name, soldiersNum, strength) {
        this.name = name;
        this.soldiersNum = soldiersNum;
        this.strength = strength;
    }

    get totalStrength() {
        return this.soldiersNum * this.strength
    }
}

const button = document.getElementById("battle-button");
button.addEventListener("click", function() {
    const army1 = new Army("Enanos de Erebor", 500, 200);
    const army2 = new Army("Elfos de Mirkwood", 400, 300);
    const army3 = new Army("Águilas de Manwë", 800, 50);
    const army4 = new Army("Orcos de Dol Guldur", 1000, 50);
    const army5 = new Army("Orcos de Gundabad", 100, 400);
    const armies = [army1, army2, army3, army4, army5]

    const winner = armies[0]
    for (let army in armies) {
        if (army.totalStrength > winner.totalStrength) {
            winner = army
        }
    }

    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `El ganador de la batalla de los 5 ejercitos son ¡${winner.name}!.`
});
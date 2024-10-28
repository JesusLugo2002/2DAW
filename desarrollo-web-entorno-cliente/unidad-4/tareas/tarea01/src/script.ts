// Ejercicio D1S1.1.1
let msg: string = 'Hola mundo'
$("#output1").text(msg)
  
// Ejercicio D1S1.1.2
type Freddy = {
    name: string;
    age: number;
    nightmare: string;
}
let osoPendejo: Freddy = {name: "Freddy", age: 1.5, nightmare: "Color perú"}
$("#output2").text(JSON.stringify(osoPendejo))

// Ejercicio D1S2.1.1
function attack(weaponName: string): string {
    return weaponName
}
$("#output3").text(`Freddy ataca con una ${attack("cuchara de té")}`)

// Ejercicio D1S2.1.2
function jump(metters?: number): number {
    if (metters) {
        return metters
    } else {
        return 5
    }
}
$("#output4").text(`Freddy salta ${jump()} metros`)

// Ejercicio D1S2.2.1
class Nightmare {
    name: string

    public constructor(name: string) {
        this.name = name
    }

    scream() {
        return `${this.name.toUpperCase()} está aquí!`
    }
}

const myNightmare = new Nightmare("Un peruano")
$("#output5").text(myNightmare.scream())

// Ejercicio D1S2.2.2
class AnotherNightmare {
    name: string

    public constructor(name: string) {
        this.name = name
    }

    scream = (): string => {
        return `${this.name.toUpperCase()} está aquí!`
    }
}
const myAnotherNightmare = new AnotherNightmare("Un chileno")
$("#output6").text(myAnotherNightmare.scream())

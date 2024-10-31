
namespace LaberintoGame {
    class Cell {
        constructor(public x: number, public y: number) {

        }
    }

    export class Player extends Cell {
        energy: number = 100;

        move(dx: number, dy: number) {
            this.x += dx;
            this.y += dy;
            this.energy -= 1;
        }
    }

    export class Trap extends Cell {
        effect(player: Player) {
            player.energy -= 20;
        }
    }

    export class SpecialItem extends Cell {
        effect(player: Player) {
            player.energy += 10;
        }
    }

    export class Exit extends Cell {

    }

    export class Matriz<T> {
        private grid: (T | null)[][];

        constructor(public rows: number, public columns: number) {
            this.grid = Array.from({ length: rows }, () => Array(columns).fill(null))
        }

        set(x: number, y: number, value: T) {

        }
    }
}
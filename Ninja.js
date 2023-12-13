class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName() {
        console.log(`My ninja name is ${this.name}.`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake and gained 10 health!`);
    }
}

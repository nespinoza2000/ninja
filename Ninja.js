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


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.sabiduria = 10;
    }
    speakWisdom() {
        super.drinkSake(); // Aumenta la salud al beber sake para obtener sabiduría
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    drinkSake() {
        super.drinkSake(); // La acción de beber sake se mantiene igual a la del Ninja
    }
}

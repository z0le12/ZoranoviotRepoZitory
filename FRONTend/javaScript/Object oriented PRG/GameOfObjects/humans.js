function Warrior() {
    this.health = getRandom(700, 900);
    this.minDamage = 60;
    this.maxDamage = 90;
    this.isAlive = true;
    this.specialAttack = this.maxDamage ** 2
    this.type = "human";
    // a human class should have properties that relate only to him
    // and he is also a combatant
}
Warrior.prototype = new Combatant();

function Wizard() {
    this.health = getRandom(400, 650);
    this.minDamage = 85;
    this.maxDamage = 125;
    this.isAlive = true;
    this.specialAttack = this.maxDamage ** 3;
    this.type = "human";
    // a human class should have properties that relate only to him
    // and he is also a combatant
}
Wizard.prototype = new Combatant();

function Archer() {
    this.health = getRandom(250, 450);
    this.minDamage = 100;
    this.maxDamage = 125;
    this.isAlive = true;
    this.specialAttack = this.maxDamage ** 4;
    this.type = "human";
    // a human class should have properties that relate only to him
    // and he is also a combatant
}
Archer.prototype = new Combatant();
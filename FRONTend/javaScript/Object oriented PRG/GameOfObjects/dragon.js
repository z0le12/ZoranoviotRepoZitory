function Dragon(name) {
    this.name = name;
    this.health = getRandom(22000, 25000);
    this.minDamage = 400;
    this.maxDamage = 899;
    this.isAlive = true;
    this.specialAttack = this.minDamage;
    this.type = "Dragon";
    // a dragon should have properties that relate only to him
    // and he is also a combatant
}
Dragon.prototype = new Combatant();
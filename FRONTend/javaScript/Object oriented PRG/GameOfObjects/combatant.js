function Combatant() {
    this.isAlive = true;

    this.attack = function(target) {
        var damage = getRandom(this.minDamage, this.maxDamage);        
        if (this.type === "human" && calculatePercent(3)) {
            damage = this.specialAttack;
        }
            target.receiveDamage(damage);
        }        


    this.receiveDamage = function(damage) {
        this.health = this.health - damage;
        this.checkHealth();
    // a combatant is a being that can fight
    // place combat related methods here
}
}
Combatant.prototype = new Being();
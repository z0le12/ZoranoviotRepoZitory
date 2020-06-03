// An orc warrior is fighting a human footman.
// The battle ends when one of them dies.
// The orc has 720 hitpoints, does 23-35 damage and has 5 armor.
// The human footman has 550 hitpoints, does 18-27 damage,
// but has a shield that gives him 9 armor.
// Shields and armor deduct the damage that the fighter takes.
// Who will win the fight?

function getRandom(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function calculatePercent(percent) {
    return (100 - percent) <= getRandom(0, 100);
}
function gameOfOrcs(orc, human) {
    while(orc.hitpoints > 0 && human.hitpoints > 0) {
        orc.hitpoints = orc.hitpoints - human.Attack();
        console.log("eneregijata na Orce e " + orc.hitpoints);
        if (orc.hitpoints <= 0) {
            this.isAlive = false;
            console.log(orc.name + " has died");
            break;            
        }
        human.hitpoints = human.hitpoints - orc.Attack();
        console.log("eneregijata na Aco e " + human.hitpoints);
        if (human.hitpoints <= 0) {
            this.isAlive = false;
            console.log(human.name + " has died");
            break;
        }
    }
}
function Combatant(name, hitpoints, minDamage, maxDamage, armour, type) {
    this.name = name;
    this.hitpoints = hitpoints;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.armour = armour;
    this.isAlive = true;
    this.type = type;

    this.Attack = function() {
        var napad = getRandom(minDamage, maxDamage) + this.armour;
        if (this.type === "human" && calculatePercent(33)) {
            var criticalNapad = napad + 33 + this.armour;
            console.log(human.name + " Has caused a CRITICAL HIT");
            return criticalNapad;
        } else {
            return napad;
        }
    }
}
var orc = new Combatant("Orce", 720, 23, 35, 5, "orc");
var human = new Combatant("Aco", 550, 18, 27, 9, "human");
gameOfOrcs(orc, human);
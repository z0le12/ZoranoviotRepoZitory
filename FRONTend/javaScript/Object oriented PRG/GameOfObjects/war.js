function War() {
    this.army = [];
    this.boss = new Dragon("Змејко");

    this.isRaging = function() {
        var aliveCombatants = 0;
        for (var index = 0; index < this.army.length; index++) {
            var combatant = this.army[index];
            if (combatant.isAlive) {
                aliveCombatants++;
            }
        }
        if (aliveCombatants > 0 && this.boss.isAlive) {
            this.processTurn();
        } else {
            if (!this.boss.isAlive) {
                console.log("The peasants have defeated the mighty dragon!");
            } else if (aliveCombatants === 0) {
                console.log(this.boss.name + " has slain all the filthy peasants");
            } else {
                console.log("The battle ended in a tie......weird!");
            }
               // this method should execute everything that happens during one day of battle
            return true;
        }
    }

    this.processTurn = function() {
        var victimIndex = getRandom(0, 9);
        var victim = this.army[victimIndex];
        if (victim.isAlive) {
            this.boss.attack(victim);
        } else {
            return this.processTurn();
        }
        
        for (var index = 0; index < this.army.length; index++) {
            var combatant = this.army[index];
            if (combatant.isAlive) {
                combatant.attack(this.boss);
            }
        }
        
    }

    // this method should generate an army of 10 people alternating randomly between 
    // 3 classes, Warrior, Wizard and Archer
    this.generateArmy = function() {
        for (var index = 0; index < 10; index++) {
            var type = getRandom(1, 3);
            switch (type) {
                case 1:
                    this.army.push(new Warrior("Warrior-" + index));
                    break;
                case 2:
                    this.army.push(new Wizard("Wizard-" + index));
                    break;
                default:
                    this.army.push(new Archer("Archer-" + index));
                    break;
            }
        }
    }
    this.generateArmy();
}
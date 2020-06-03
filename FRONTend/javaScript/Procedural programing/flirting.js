function getRandom(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
function flirting(tries, hitpoints) {
    var points = 0;
    for (var i = 1; i <= getRandom(0, 100); i++) {
        points = points + 1;
        if (i % 3 === 0) {
            points = points + 5;
        } else if (i % 5 === 0) {
            points = points + 10;
        } else if (i % 10 === 0) {
            points = points - 10;
        }
    } console.log("Number of flerts is equal to " + i, "and she gathered a total number of " + points + " points");
        for (var i = 0; i < tries; i++) {
        hitpoints = hitpoints - points;
        } console.log("She used her charms a total of " + i + " times to win his heart", "and left the boy with " + hitpoints + " endurance rating");
    if (hitpoints <= 0) {
        console.log("Epiloque: You got him, he is under your spell")
    } else {
        console.log("Epiloque: You'z a stupid hoe, put your shit together...!!!BITCH!!!")
    }
}
flirting(getRandom(0, 3), getRandom(0, 225));
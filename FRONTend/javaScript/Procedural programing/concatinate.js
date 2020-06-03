// Write a function that will receive 3 parameters. 
// Two strings and a boolean. 
// If the boolean value is “true”, concatenate the strings. 
// If the value is false, concatenate them in the inverse order. 
// Think about what would happen if we enter only 1 or 2 parameters.

function getRandom(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    return randomNumber;
};

function concatinate(x, y, z) {
    if (x > 50 || y > 50) {
        return "YES" + " Please";
    } else if (x < 50 || y < 50) {
        return "Please" + " YES";
    } else if (x === 50 || y === 50) {
        return z;
    }
};
console.log(concatinate(getRandom(0, 100), getRandom(0, 100), getRandom(0, 100)));
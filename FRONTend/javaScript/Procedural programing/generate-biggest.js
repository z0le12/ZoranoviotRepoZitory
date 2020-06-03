// Write a JavaScript program to randomly generate ten values, 
// determine the largest value that you’ve generated, 
// and print it to console or alert.

function generate(min, max) {
    var biggest = 0;
    var i = 0;
    while (i < 10) {
        var random = Math.floor(Math.random() * (max - min + 1)) + min
        console.log(random + " ova e generiraniot broj");
        i++
    if (random > biggest) {
        biggest = random;
    }
    }
console.log("bigget number is ", biggest);
}
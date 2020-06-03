// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function sumOfDigits() {
    var rezultat = 0;
    for (var i = 0; i < 1000; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            rezultat = rezultat + i;
        }
    }
    console.log(rezultat);
}
sumOfDigits();
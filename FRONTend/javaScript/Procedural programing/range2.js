// Write a JavaScript program that will iterate through a given range of numbers 
// (as function parameters) and sum the numbers. 
// However, if the iteration reaches a prime number, you should skip summing that number, 
// but continue with the loop. A prime number is a number that is divisive only with itself or 1. 
// Print out the sum to console and the number of times you skipped summing a prime number. 
// BONUS: Print out the prime numbers you’ve found into a string or array.

function rangeTwo(x, y) {
    var result = 0;
    for (var i = x; i <= y; i++) {     //An integer is prime number if it is not divisible by any other prime number but itself and 1
        if (isPrime(i)) {
            console.log(i);
            continue;
        }
        result = result + i;
    }
    console.log(result);
 }
 
 function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }        
    }
    return number > 1;
 }
 rangeTwo(4, 60);
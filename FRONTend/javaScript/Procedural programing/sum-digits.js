// Write a JavaScript program that will read in an integer and sum its digits.

function sumDigits(number) {
    var result = 0;
    while (number > 0) {        
        var digit = number % 10;
        console.log(digit);
        result = digit + result;
        number = Math.floor(number / 10);
    }
    console.log(("The result is:" + result));
}
sumDigits(3453);
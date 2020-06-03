// Write a function that accepts two numbers N and X. 
// Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X. 
// A number is TOTALLY DIFFERENT from another:
// if every digit in the first number is different than every digit of the second number. 
// You are not permitted to use arrays or matrices (we haven’t learned them yet). 
// It’s ok to write subprocedures (helper functions that get called in your main function).

// Решение 1
function totallyDifferentOne(n, x) {
    for (var i = n + 1; i < 500000; i++) {
        var result = checkNumbers(i, x);
        if (result) {
            console.log("The numbers are totally different: ", i, x);
            return;
        }
    }
}
function checkNumbers(number1, number2) {
    while (number1 > 0) {
        var num2 = number2;
        var result1 = number1 % 10;
        while (num2 > 0) {
            var result2 = num2 % 10;
            if (result1 === result2) {
                console.log("numbers are the same");
                return false;
            }
            num2 = Math.floor(num2 / 10);
        }
        number1 = Math.floor(number1 / 10);
    }
    return true;
};
totallyDifferentOne(100, 124567890);

//Решение 2
function totallyDifferentTwo(n, x) {
    while (true) {
        n++;
        var diffNumbers = areDifferent(n, x);
        if (diffNumbers) {
            console.log("the numbers are totally different ", n, x);
            return;
        }
    }
}
function areDifferent(num1, num2) {
    while(num1) {
        var secondary = num2;
        var firstDigit = num1 % 10;
        while (secondary) {
            var secondDigit = secondary % 10;
            if (firstDigit === secondDigit) {
                return false;
            }
            secondary = Math.floor(secondary / 10);
        }
        num1 = Math.floor(num1 / 10);
    }

    return true;
};
totallyDifferentTwo(100, 2456789);
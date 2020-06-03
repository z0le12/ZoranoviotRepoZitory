// Write a script to check whether a number is a palindrome or not. 
// Input the number as a parameter.

//Математичко решение
function palindrome(no) {
    var reversedNo = 0
    var temp = no;
    while (temp) {
        var digit = no % 10;
        reversedNo = reversedNo * 10 + digit
        temp = Math.floor(temp / 10);
    }
    if (temp === reversedNo) {
        console.log(true);
    } else {
        console.log(false);
    }
}
palindrome(6546415613);

//Логичко решение
function isPalindrome(number) {
    var reverseNum = parseInt(number.toString().split("").reverse().join(""));
    if (number === reverseNum) {
        console.log("it is a palindrome!");
    } else {
        console.log("it is not a palinfrome!");
    }
}
isPalindrome(45225);
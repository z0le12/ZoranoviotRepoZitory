// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
// For example: if the input string is "Hello World and Coders"
// then your program should return the string sredoC dna dlroW olleH.

// Examples

// Input: "coderbyte"
// Output: etybredoc

// Input: "I Love Code"
// Output: edoC evoL I

// решение 1
function firstReverseOne(str) { 
    return str.split('').reverse().join('');
};
console.log(firstReverseOne('coderbyte'));

firstReverseTwo = (str) => str.split('').reverse().join('');
console.log(firstReverseTwo('Hello World and Coders'));

// решение 2
function firstReverseOldSchool(str) {
    let reversedArr = [];

    for(let i = str.length - 1; i >= 0 ; i--) {
        let letter = str.charAt(i);
       reversedArr.push(letter);
    }
    
    str = reversedArr.join('');
    return str;
}
console.log(firstReverseOldSchool('I Love Code'));
// Write a JavaScript program to get the integers in range (x, y). 
// Input the range as parameters (start and finish). 
// Print the sum of the numbers as a string.

function range(x, y) {
    var result = 0;
    for (var i = x; i <= y; i++) {
        result = result + i;
    }
    console.log("The result of the numbers in the range is " + result);
}
range(4, 60);
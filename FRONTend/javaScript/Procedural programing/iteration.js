// Write a JavaScript program that will iterate from 0 to 15. 
// For each iteration, it will check if the current number is odd or even, 
// and display a message to the screen (alert or console.log).

function iteration() {
    for (var i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(i + " the number is even");
        } else {
            console.log(i + "the number is odd");
        }
    }
}
iteration();
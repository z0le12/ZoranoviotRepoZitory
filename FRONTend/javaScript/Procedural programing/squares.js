// Write a JavaScript program to write the sum of squares of the numbers from 101 to 150.

function squares() {
    var suma = 0;
    var i = 101;
    while (i <= 150) {
        var rez = Math.pow(i, 2);      
        console.log(rez);
        suma = suma + rez;
        i++        
    }
    return suma;
}
console.log(squares());
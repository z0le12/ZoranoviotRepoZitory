// Write a JavaScript program to find the armstrong numbers of 3 digits. 
// Note : An Armstrong number of three digits is an integer such that the 
// sum of the cubes of its digits is equal to the number itself. 
// For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

// решение 1
function armstrong() {
    for (var i = 1; i < 10; ++i) {
    for (var j = 0; j < 10; ++j) {
    for (var k = 0; k < 10; ++k) {
        var pow = (Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3));
        var result = (i * 100 + j * 10 + k);
            if (pow === result) {
            console.log(result);
        }
        }
    }
}
}
armstrong(567);

// решение 2
function armstrongNum(number) {
    var result = 0;
    while (number > 0) {
        var digit = number % 10;
        result = result + Math.pow(digit, 3);
        number = Math.floor(number / 10);
    }
    return result;
}
for (var i = 100; i <= 999; i++) {
    var result = armstrongNum(i);
    if (result === i) {
        console.log(i + " is amstrong number");
    }
}
armstrongNum(121);

//Вежбање
function cepkanje() {
    for (var i = 100; i < 1000; i++) {
        var a = i % 10;
        var b = Math.floor(i / 10) % 10;
        var c = Math.floor(i / 100);
        var sum = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
        console.log(sum);
    }
}
cepkanje();
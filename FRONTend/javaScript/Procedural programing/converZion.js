// Decription:
// Celsius to Fahrenheit - formula: X°C x 1.8 + 32
// Action: Write a function that will be able to convert Celsius to Fahrenheit 
// and display the result
// Bonus: Write another function that will be able to convert 
// Fahrenheit to Celsius and save the result, then display it. 
// Formula: (5/9) * (Fahrenheit-32)

// мое решение
function conversion(farenheit, celsius) {
    var far = (celsius * 1.8) + 32;
    var cel = (5 / 9) * (farenheit - 32);
    var convert = [far, cel];
    return convert;
}
var x = conversion(100, 10)
for (i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// решение на Владимир
function convertTemperature(temperature, type) {
    var result = 0;
    if (type === "celsius") {
        result = temperature * 1.8 + 32;
    } else if (type === "farenheit") {
        result = (5 / 9) * (temperature - 32);
    } else {
        result = 5;
    }
    return result;
}
var fahr = convertTemperature(38, "celsius");
var cels = convertTemperature(88, "farenheit");
var sameNum = convertTemperature(300);
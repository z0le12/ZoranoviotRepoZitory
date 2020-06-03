// A car uses 7 litres of fuel on 100km. 
// How much fuel will the car spend driving 43 kilometers? 
// Use a loop instead of a mathematical formula.

function car(kilometres) {
    var fuel = 0;
    var oneKM = 7 / 100;
    for (var i = 1; i <= kilometres; i++) {        
        fuel = fuel + oneKM;
        }             
        console.log("the car will spend " + fuel.toFixed(2) + " litres of petrol");
    }
car(43);
// Calculate the tax that people need to pay for their salary. 
// Until they reach 1000 eur, they pay 11% tax, but when they go above 1000 eur, 
// they pay 18% for the sum above the threshold. 
// (Example: 1300 eur salary, 1000 eur get taxed 11%, 300 eur get taxed 18%, get the total tax). 
// Modify the function to check if the worker is a craftsman, 
// if he is, drop the taxes to 5% and 10% respectively

function getRandom(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    return randomNumber;
}

function totalSalary(salary, type) {
    var tax = 0;
    var overtax = 0;
    if (type  === "craftsman") {
        tax = 0.05;
        overtax = 0.1;
    } else {
        tax = 0.11;
        overtax = 0.18;
    }
    var netPay = 0;
    if (salary <= 1000) {
        netPay = salary - (salary * tax);
    } else {
        var extraProfit = salary - 1000;
        netPay = salary - (salary * tax + extraProfit * overtax);
    }
    return netPay + " Net salary received";
}
console.log(totalSalary(getRandom(0, 5000), "crafsman"));
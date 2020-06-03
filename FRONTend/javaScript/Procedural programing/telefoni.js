// Write a JavaScript program that will calculate the price of 30 iPhones brought in from USA, 
// where the price of one iPhone is $899.95, 
// the customs rate is 5% 
// and the tax rate is 18%.
// Modify the previous task to handle any phone at any price, 
// with any given customs and tax rates.

var phones = 30;
var price = 899.95;
var customs = 1.05;
var tax = 1.18;
var total = phones * price * customs * tax;
console.log(total);

function ajfon(phones, price, customs, tax) {
    console.log(phones * price * customs * tax)
}
ajfon(30, 899.95, 1.05, 1.18);
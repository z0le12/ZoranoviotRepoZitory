//You are given a positive integer. 
//Your function should calculate the product of the digits excluding any zeroes.
//For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
//Input: A positive integer.
//Output: The product of the digits as an integer.

function sumOFNum(num) {
   const number = num.toString().split("").map(Number).reduce((a, b) => a * (b ? b : 1));
   console.log(number)
};
sumOFNum(12302);

function multiplyDigits(num) {
  const arr = num.toString().split("").filter(e => e != 0);
  let sum = 1;
  for(let i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }
  console.log("result " + arr, sum);
};
multiplyDigits(2020202);
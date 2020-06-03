//You are given an array with positive numbers and a number N.
//You should find the N-th power of the element in the array with the index N.
//If N is outside of the array, then return -1.
//Don't forget that the first element has the index 0.
//Let's look at a few examples:
//- array = [1, 2, 3, 4] and N = 2, then the result is 3 ^ 2 = 9;
//- array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
//Input: Two arguments. An array as a list of integers and a number as a integer.
//Output: The result as an integer.

function getRandom(min, max) {
   var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   return randomNumber;
};

function findIndexOfArray(n) {
  console.log("N equals to " + n);
  const arr = [];
  for(i = 0; i < getRandom(9, 15); i++) {    
    arr.push(getRandom(0, 15));
  }
  console.log(`number of iterations ${i}\n${arr}`);
  const indexOfArray = arr[n];
  console.log(`Index of array is ${indexOfArray}`);
    if(indexOfArray) {
    const result = indexOfArray ** n;
    console.log(result);
    } else {
      console.log(`The result is "-1", because, the random number ${n} is equal or greater than the number of iterations ${i}.\nOr the random number ${n} is equal to zero.`);
    }
};
findIndexOfArray(getRandom(0, 15));
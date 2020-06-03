//The Fibonacci Series
//The Fibonacci sequence begins with 0 and 1 These are the first and second terms, respectively. 
//After this, every element is the sum of the preceding elements:
//Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
//Task
//Given the starter code, complete the Fibonacci function to return the  term.
//We start counting from Fibonacci(1)=0 This might differ from some other notations that treats Fibonacci(0)=0.
//The overall equation is:
//             = 0 , n = 1
//         Fibonacci(n) = 1 , n = 2
//    Fibonacci(n-1) + Fibonacci(n-2)  , n > 2

function fibonaciArr() {
    var array = [0,1];
    for (let i = 2; i < 33; i++ ) {
      array[i] = array[i - 2] + array[i - 1];
    }
    console.log(array);
}
fibonaciArr();

function fibonacci() {
  const arr = [0];
  let n = 1;
  for(let i = 0; i < 33; i++) {
    let start = arr[arr.length - 1];
    let addition = start + n;
    arr.push(addition);
    n = addition - n;
  };
  console.log("fibonacci " + arr);
};
fibonacci();
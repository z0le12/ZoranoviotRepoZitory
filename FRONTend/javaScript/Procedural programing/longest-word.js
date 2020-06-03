function longestWord(sen) { 
    sen = sen.replace(/[^a-zA-Z]/g, " ");
    let arr = sen.split(" ");
    let biggestWord = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length > biggestWord.length) {
            biggestWord = arr[i]
        }
    }
  return biggestWord;
  } 
  console.log(longestWord('I like to#eat cake'));
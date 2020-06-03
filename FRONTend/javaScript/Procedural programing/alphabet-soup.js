// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string
// with the letters in alphabetical order (ie. hello becomes ehllo).
// Assume numbers and punctuation symbols will not be included in the string.

// Examples

// Input: "coderbyte"
// Output: bcdeeorty

// Input: "hooplah"
// Output: ahhloop

// решение 1
function alphabetSoupOne(str) {
    function compare(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    }
    return str.split("").sort().sort(compare).join('');
}
console.log(alphabetSoupOne('ACBacbAzZ'));

// решение 2
function alphabetSoupTwo(str) {
    function compare(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    };

    return str.split("").sort((a, b) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    }).sort(compare).join('');
}
console.log(alphabetSoupTwo('ACBacbAzZ'));

// решение 3
function alphabetSoupThree(str) {
    function caseInsensitiveSort(a, b) {
       a = a.toLowerCase();
       b = b.toLowerCase();
    
       if(a > b)
          return 1;
       if(a < b)
          return -1;
       return 0;
        }
    
        str.split('').sort(caseInsensitiveSort).join('');
        return str;
    }
    console.log(alphabetSoupThree('ABCabcaaa'));

// бонус
function mySort(arr) {
    let newArr = []
    while(arr.length > 0) {
        let smallest = arr[0];
        let smallestIndex = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < smallest) {
                smallest = arr[i];
                smallestIndex = i;
            };
        };
        newArr.push(smallest);
        arr.splice(smallestIndex, 1);
    };
    return newArr;
};
console.log(mySort([555, 18, 638, 333, 421]));
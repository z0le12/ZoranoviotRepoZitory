// Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr
// which will contain 2 strings representing two comma separated lists of keypresses.
// Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not.
// A keypress can be either a printable character or a backspace represented by -B.
// You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character.

// For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"] the output should return true
// because those keypresses produce the same printable string. The array given will not be empty.
// The keypresses will only contain letters from the alphabet and backspaces.

// Examples

// Input: ["a,b,c,d", "a,b,c,d,-B,d"]
// Output: true

// Input: ["c,a,r,d", "c,a,-B,r,d"]
// Output: false

// решение 1
function equivalentKeypressesOne(strArr) {   
    return (applyBackspaces(strArr[0]) === applyBackspaces(strArr[1]));
}

function applyBackspaces(arr){
    arr = arr.split(',');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '-B') {
            arr.splice((i - 1), 2);
        };
    };
    arr = arr.join(',');
    return arr;
};
console.log(equivalentKeypressesOne(["a,b,c,d", "a,b,c,d,-B,d,z"]));

// решение 2
function equivalentKeypressesTwo(strArr) {
    function reduce(str) {
        let result = "";
        str = str.split(",");
        console.log(`the string splited ${str}`);
        str.forEach(function(item, index) {
            if(str[index + 1] !== "-B" && str[index] !== "-B") {
                result = result + item;
            }
        })
        return result;
    }
    return reduce(strArr[0]) == reduce(strArr[1]);
}
console.log(equivalentKeypressesTwo(["a,b,c,d", "a,b,c,d,-B,d"]));
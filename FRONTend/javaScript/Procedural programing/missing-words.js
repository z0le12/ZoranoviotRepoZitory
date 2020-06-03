// Julia and Samantha are playing with strings.
// Julia has a string S, and Samantha has a string T which is a subsequence of string S.
// They are trying to find out what words are missing in T.
// Help Julia and Samantha to solve the problem.
// List all the missing words in T, such that inserting them at the appropriate positions in T,
// in the same order, results in the string S.

//решение 1
function missingWordsOne(s, t) {
	var missing = [];
    var a = s. split(' ');
	var b = t.split(' ');
	
	a.forEach((e, i) => {
		if(e !== b[i - missing.length]) {
			missing.push(e);
		}
	});	
	return missing;
};
console.log(missingWordsOne('I like cheese', 'like'));

//решение 2
function missingWordsTwo(s, t) {	
	var missing = [];
	var a = s. split(' ');
	var b = t.split(' ');
	
	for(var i=0, j=0; i < a.length; i++){
		if(a[i] !== b[j]) {
			missing.push(a[i]);
		} else {
			j++;
		}
	}
	return missing;
};
console.log(missingWordsTwo("I am learning to program", "I learning"));
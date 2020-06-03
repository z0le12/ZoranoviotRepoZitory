// A student in a code academy has 3 classes in one session.
// There are 12 sessions in every month. The academy lasts for 6 months, 
// but has a small winter break in January, 
// and that month, there are 6 sessions (don’t worry, this doesn’t apply to us).
// Print the number of classes that the student will have for the whole academy year. 
// (With alert() or console.log())

var classes = 3;
var sessions = 12;
var months = 6;
var January = 6;
var numberOfClasses = (((classes * sessions) * months) - January);
console.log(numberOfClasses);

function brojNaCasovi(classes, sessions, months, January) {
    var rez = (((classes * sessions) * months) - January)
    console.log(rez);
}
brojNaCasovi(3, 12, 6, 6);
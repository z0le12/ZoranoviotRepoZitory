// Ask the user how much money does he have, and depending on the value, suggest him what should he do

function user(money) {
    if (money < 500) {
    return "Buy snacks and watch a movie at home";
}   else if (money <= 1500) {
    return "Go out and grab a bite";
}   else {
    return "travel the world";
}
}
document.write(user(385));
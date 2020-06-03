function getRandom(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

function calculatePercent(percent) {
    return (100 - percent) <= getRandom(0, 100);
}
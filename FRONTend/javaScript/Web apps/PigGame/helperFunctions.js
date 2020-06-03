function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculatePercent(percent) {
    return (100 - percent) <= getRandom(0, 100);
}
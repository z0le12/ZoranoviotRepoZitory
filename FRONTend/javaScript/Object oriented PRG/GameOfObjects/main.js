function main() {
    var theRedWedding = new War();

    while(true) {
        var end = theRedWedding.isRaging();
        // if one of the sides dies, isRaging should return true and end the while loop
        if (end) {
            console.log("The battle has ended ", theRedWedding);
            return;
        }
    }
}

main();
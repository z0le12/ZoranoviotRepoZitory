// Calculate the cost of registering a vehicle if the tariff is:
//  - 3000 denars for vehicles that have less or equal than 85 bhp
//  - 5000 denars for vehicles above 85 bhp but less or equal than150 bhp
//  - 15000 denars for vehicles above 150 bhp


function registration(bHp) {
    if (bHp <= 85) {
        return 3000 + " денари";
    } else if (bHp <= 150) {
        return 5000 + " денари";
    } else {
        return 15000 + " денари";
    }
}
console.log(registration(133));
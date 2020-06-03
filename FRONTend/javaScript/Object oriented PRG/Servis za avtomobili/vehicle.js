export function Vehicle(ID, model, year, mileage, owner, registration) {
    this.ID = ID;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.owner = owner;
    this.registration = registration;
    this.repairs = [];

    this.render = function() {
        const values = [['Model', this.model], ['Year', this.year], ['Mileage', this.mileage], ['Owner', this.owner], ['Registration', this.registration], ['Prevoius repairs', this.repairs]];
        return values;
    };

    this.deleteLastRepair = function() {
        this.repairs.pop();
    };
};
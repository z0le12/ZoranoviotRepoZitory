export function Database() {
    this.database = {
        records: [],
        nextID: 1
    };
    // find vehicle by registration, returns undefined if not found
    this.findVehicleByReg = (reg) => {
        return this.database.records.find(e => e.registration === reg);
    };

    this._findVehicleIndexByRegistration = (registration) => {
        for (let i = 0; i < this.database.records.length; i++) {
            if (this.database.records[i].registration === registration) {
                return i;
            };
        };
        return -1;
    };

    this.deleteVehicleByRegistration = (registration) => {
        const findVehicleIndex = this._findVehicleIndexByRegistration(registration);
        if (findVehicleIndex < 0) {
            return false;
        };

        this.database.records.splice(findVehicleIndex, 1);
        console.log('Db records:', this.database.records);
        return true;
    };

    this.addNewVehicle = (vehicle) => {
        vehicle.ID = this.database.nextID;
        this.database.nextID += 1;
        this.database.records.push(vehicle);
        console.log('Db records:', this.database.records);
    };

    this.getAllVehicles = () => {
        return this.database.records;
    };
};
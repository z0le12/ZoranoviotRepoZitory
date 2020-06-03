import { Vehicle } from './vehicle.js';

export function generateAddButtonOnClick(db, ui) {
    return function () {
        const checkVehicle = db.findVehicleByReg(ui.registrationNumber.value);

        if (checkVehicle) {
            alert(`There's already a stored vehicle with the registration: ${ui.registrationNumber.value}`);
            return;
        };

        const fakeId = -1;
        const newVehicle = new Vehicle(fakeId, ui.model.value, ui.year.value, ui.mileage.value, ui.owner.value, ui.registrationNumber.value);
        db.addNewVehicle(newVehicle);
        ui.clearVehicleForm();
    };
};
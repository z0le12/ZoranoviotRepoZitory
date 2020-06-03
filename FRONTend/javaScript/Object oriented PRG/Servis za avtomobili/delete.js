export function createOnDeleteVehicleClick(ui, db) {
    return (params) => {
        const vehicleReg = params.srcElement.id;
        const wasDeleted = db.deleteVehicleByRegistration(vehicleReg);
        if (!wasDeleted) {
            alert('Vehicle was not found in database, could not be deleted');
        };
        ui.closeDiv();
    };
};

export function deleteLastRepair(ui, db) {
    return (params) => {
        const findVehicle = db.findVehicleByReg(params.srcElement.id);
        findVehicle.deleteLastRepair();
        ui.closeDiv();
    };
};
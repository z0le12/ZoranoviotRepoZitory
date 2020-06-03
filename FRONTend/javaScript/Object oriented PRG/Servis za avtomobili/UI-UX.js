import { createOnDeleteVehicleClick, deleteLastRepair } from './delete.js';

export function generateSearchOnClick(ui) {
    return () => {
        ui.renderVehicle();
    };
};

export function UI(db) {
    this.db = db;
    this.model = document.getElementById('model');
    this.year = document.getElementById('productionYear');
    this.mileage = document.getElementById('mileage');
    this.owner = document.getElementById('owner');
    this.registrationNumber = document.getElementById('registrationNumber');

    //buttons
    this.addBtn = document.getElementById('addBtn');

    //search
    this.searchInput = document.querySelector('.searchText');
    this.searchButton = document.getElementById('searchOrdered');
    this.searchAllButton = document.getElementById('searchAll');

    //render
    this.populate = document.querySelector('.populate');

    this.clearVehicleForm = () => {
        this.model.value = '';
        this.year.value = '';
        this.mileage.value = '';
        this.owner.value = '';
        this.registrationNumber.value = '';
    };

    this.renderSingleVehicle = (renderValues, labelsDiv) => {
        for (let i = 0; i < renderValues.length; i++) {
            const newPTag = document.createElement('p');
            newPTag.classList.add('newPTag');
            newPTag.innerHTML = `${renderValues[i][0]}: ${[renderValues[i][1]]}`;
            labelsDiv.appendChild(newPTag);
        };
    };

    this.renderVehicle = () => {
        const searchInputValue = this.searchInput.value;
        const foundVehicle = this.db.findVehicleByReg(searchInputValue);

        if (!foundVehicle) {
            alert(`No such registration ${searchInputValue} stored in database`);
            return;
        }

        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv');
        this.populate.appendChild(newDiv);
        
        const labelsDiv = document.createElement('div');
        newDiv.appendChild(labelsDiv);

        const renderValues = foundVehicle.render();
        this.renderSingleVehicle(renderValues, labelsDiv);

        const repairsDiv = document.createElement('div');
        repairsDiv.classList.add('repairsDiv');
        const deleteLastRepairBtn = document.createElement('button');
        deleteLastRepairBtn.id = foundVehicle.registration;
        deleteLastRepairBtn.innerHTML = 'Delete last repair';
        const deletingLastRepair = deleteLastRepair(this, this.db);
        deleteLastRepairBtn.addEventListener('click', deletingLastRepair);
        repairsDiv.appendChild(deleteLastRepairBtn);
        const repairsDescription = document.createElement('h4');
        repairsDescription.innerHTML = 'Add repair: ';
        repairsDiv.appendChild(repairsDescription);
        newDiv.appendChild(repairsDiv);
        const textArea = document.createElement('textarea');
        textArea.id = 'textArea';
        repairsDiv.appendChild(textArea);
        const addRepairBtn = document.createElement('button');
        addRepairBtn.id = foundVehicle.registration;
        addRepairBtn.addEventListener('click', () => {
            const space = ' ' + textArea.value;
            foundVehicle.repairs.push(space);
            this.closeDiv();
        });
        addRepairBtn.innerHTML = 'Add repair';
        repairsDiv.appendChild(addRepairBtn);

        const buttonsDiv = document.createElement('div');
        newDiv.appendChild(buttonsDiv);
        const deleteBtn = document.createElement('button');
        deleteBtn.id = foundVehicle.registration;
        deleteBtn.innerHTML = 'DELETE';
        const onDeleteBtnClick = createOnDeleteVehicleClick(this, this.db);
        deleteBtn.addEventListener('click', onDeleteBtnClick);
        buttonsDiv.appendChild(deleteBtn);

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Close';
        closeBtn.addEventListener('click', this.closeDiv);
        buttonsDiv.appendChild(closeBtn);
    };


    this.closeDiv = () => {
        if (this.populate.childNodes.length > 1) {
            for (let i = this.populate.childNodes.length - 1; i >= 0; i--) {
                this.populate.removeChild(this.populate.childNodes[i]);
            }
        } else {
            this.populate.removeChild(this.populate.childNodes[0]);
        }
        this.searchInput.value = '';
    };

    this.renderSearchAll = () => {
        const allVehicles = this.db.getAllVehicles();
        if (allVehicles.length == 0) {
            return;
        };
    
        for (let i = 0; i < allVehicles.length; i++) {
            const labelsDiv = document.createElement('div');
            labelsDiv.classList.add('searchAllNewDiv');
            const renderValues = allVehicles[i].render();
            this.renderSingleVehicle(renderValues, labelsDiv);
            this.populate.appendChild(labelsDiv);
        };
        
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Close';
        closeBtn.addEventListener('click', this.closeDiv);
        this.populate.appendChild(closeBtn);
    };
};
import { generateAddButtonOnClick } from './addButton.js';
import { UI, generateSearchOnClick } from './UI-UX.js';
import { Database } from './database.js';

function events() {
    const db = new Database();
    const ui = new UI(db);
    
    const onAddBtnClickFn = generateAddButtonOnClick(db, ui);
    ui.addBtn.addEventListener('click', onAddBtnClickFn);

    const onSearchBtnClickFn = generateSearchOnClick(ui);
    ui.searchButton.addEventListener('click', onSearchBtnClickFn);

    ui.searchAllButton.addEventListener('click', ui.renderSearchAll);
};
events();
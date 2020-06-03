const mysql = require('mysql');
const configs = require('../../configuration/mysql.json');
const con = mysql.createConnection(configs);
const tables = require('../tables/createTables');

const { usersTable, paymentCards, items, cart, orders } = tables;

con.connect((err) => {
    if(err) {
        console.error(err)
    } else {
    console.log("Database and server are working simultaneously");
    con.query(usersTable);
    con.query(paymentCards);
    con.query(items);
    con.query(cart);
    con.query(orders);
    }
});

module.exports = {
    con
};
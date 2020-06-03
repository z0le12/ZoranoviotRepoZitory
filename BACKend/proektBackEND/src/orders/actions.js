const database = require('../database/mysql.js');

const { con } = database;

function listAllOrders() {
    listAllOrdersQuery = "SELECT * FROM orders";
    return new Promise((resolve, reject) => {
        con.query(listAllOrdersQuery, (err, results) => {
            if(err) {
                reject(err);
                console.error(err);
            } else {
                resolve(results);
            }
        });
    });
};

const list = async(req, res, next) => {
    try{
        const allOrders = await listAllOrders();
        res.status(200).send({success: true, message: "A list of all orders in the shop", body: allOrders});
    } catch(err) {
        res.status(503).send({success: false, message: "Cannot get orders list"});
    }
    await next;
};

function listSingleOrderItem(id) {
    const singleOrderQuery = "SELECT users.firstName, users.lastName, users.username, users.email, paymentCards.cardHolder, paymentCards.cardNumber, orders.dateOrdered, items.name, items.price, items.location FROM users INNER JOIN paymentCards ON users.id = paymentCards.userID INNER JOIN orders ON users.id = orders.userID INNER JOIN items ON orders.itemsID = items.id WHERE users.id = ?";
    return new Promise((resolve, reject) => {
        con.query(singleOrderQuery, [id], (err, results) => {
            if(err) {
                reject(err);
                console.error(err);
            } else {
                resolve(results);
            }
        });
    });
};

const listOne = async(req, res, next) => {
    const id = req.params.userID;

    try{
        const singleOrder = await listSingleOrderItem(id);
        res.status(201).send({success: true, message: `listig orders for user with ID ${id}`, body: singleOrder});
    } catch(err) {
        res.status(404).send(err.message);
    }
    await next;
};

function makingOrder(dateOrdered, userID, paymentCardsID, itemsID, cartID) {
    const orderingQuery = "INSERT INTO orders (dateOrdered, userID, paymentCardsID, itemsID, cartID) VALUES (?, ?, ?, ?, ?)";
    return new Promise((resolve, reject) => {
        con.query(orderingQuery, [dateOrdered, userID, paymentCardsID, itemsID, cartID], (err, results) => {
            if(err) {
                reject(err);
                console.error(err);
            } else {
                resolve(results);
            }
        });
    });
};

const order = async(req, res, next) => {
    const dateOrdered = new Date(Date.now());
    const userID = req.params.userID;
    const paymentCardsID = req.body.paymentCardsID;
    const itemsID = req.body.itemsID;
    const cartID = req.body.cartID;

    try{
        const newOrder = await makingOrder(dateOrdered, userID, paymentCardsID, itemsID, cartID);
        res.status(201).send({success: true, message: "The order have been placed with the items", body: {userID, paymentCardsID, itemsID, cartID}});
    } catch(err) {
        res.status(401).send({success: false, message: "Error!!! The order hasn't been placed"})
    }
    await next;
};

function deleteFromOrders(id) {
    const deleteOrdersQuery = "DELETE FROM orders WHERE id = ?";
    return new Promise((resolve, reject) => {
        con.query(deleteOrdersQuery, [id], (err, results) => {
            if(err) {
                reject(err);
                console.error(err);
            } else {
                resolve(results)
            }
        });
    });
};

const erase = async(req, res, next) => {
    const id = req.params.id;
    try {
        const deletedOrder = await deleteFromOrders(id);
        res.status(201).send({success: true, message: `The order with ID ${id} have been deleted`});
    } catch(err) {
        res.status(401).send({success: false, message: "Unable to delete the order"});
    }
    await next;
};

module.exports = {
    list,
    listOne,
    order,
    erase
};
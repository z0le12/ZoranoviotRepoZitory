const database = require('../database/mysql.js');

const { con } = database;


function listAllCartItems() {
    everythingInCart = "SELECT * FROM cart";
    return new Promise((resolve, reject) => {
        con.query(everythingInCart, (err, results) => {
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
        const allCartItems = await listAllCartItems();
        res.status(200).send({success: true, message: "A list of all orders in the shop", body: allCartItems});
    } catch(err) {
        res.status(503).send({success: false, message: "Cannot get orders list"});
    }
    await next;
};

function listSingleCartItem(usersID) {
    const singleCartQuery = "SELECT users.firstName, users.lastName, users.username, users.email, cart.dateInserted, items.name FROM users INNER JOIN cart ON users.id = cart.userID INNER JOIN items ON items.id = cart.itemsID WHERE users.id = ?";
    return new Promise((resolve, reject) => {
        con.query(singleCartQuery, [usersID], (err, results) => {
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
    const usersID = req.params.usersID;

    try{
        const singleCartItem = await listSingleCartItem(usersID);
        res.status(201).send({success: true, message: `listig the cart items for user with ID ${usersID}`, body: singleCartItem});
    } catch(err) {
        res.status(404).send(err.message);
    }
    await next;
};

function insertToCart(dateInserted, userID, itemsID) {
    const makingOrderQuery = "INSERT INTO cart (dateInserted, userID, itemsID) VALUES (?, ?, ?)"
    return new Promise((resolve, reject) => {
        con.query(makingOrderQuery, [dateInserted, userID, itemsID], (err, results) => {
            if(err) {
                reject(err);
                console.error(err);
            } else {
                resolve(results)
            }
        });
    });
};

const create = async(req, res, next) => {
    const dateInserted = new Date(Date.now());
    const userID = req.params.id;
    const itemsID = req.body.itemsID;
    try{
        const newOrder = await insertToCart(dateInserted, userID, itemsID);
        res.status(200).send({success: true, message: "New items have been added to the cart", body: newOrder});
    } catch(err) {
        res.status(401).send({success: false, message: err.message});
    }
};

function listACartItem(id) {
    const singleCartItemQuery = "SELECT * FROM cart WHERE id = ?";
    return new Promise((resolve, reject) => {
        con.query(singleCartItemQuery, [id], (err, results) => {
            if(err) {
                reject(err);
                console.error(err);
            } else {
                resolve(results);
            }
        });
    });
};

function updateCart(cart, id) {
    const updateOrdersQuery = 'UPDATE cart SET itemsID = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        con.query(updateOrdersQuery, [cart.itemsID, id], (err, results) => {
            if(err) {
                reject(err);
                console.error(err);
            } else {
                resolve(results)
            }
        });
    });
};

const update = async(req, res, next) => {
    const id = req.params.id;
    const itemsID = req.body.itemsID;

    let cart = {
        itemsID: ""
    };

    try {
    const cartItem = await listACartItem(id);
    const alreadyInCart = cartItem[0];

    if(itemsID === null || itemsID === undefined) {
        cart.itemsID = alreadyInCart.itemsID;
    } else {
        cart.itemsID = itemsID;
    }
    const updatedCartItem = await updateCart(cart, id);
        res.status(201).send({success: true, message: `Updated cart items with ID ${id}`});
    } catch(err) {
        console.log(err);
        res.status(400).send({success: false, message: `cannot update cart items`});
    }
    await next;
};

function deleteFromCart(userID) {
    const deleteItemQuery = "DELETE FROM cart WHERE userID = ?";
    return new Promise((resolve, reject) => {
        con.query(deleteItemQuery, [userID], (err, results) => {
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
    const userID = req.params.userID;
    try {
        const deletedCartItem = await deleteFromCart(userID);
        res.status(201).send({success: true, message: `The cart items from user with user ID ${userID} have been deleted`});
    } catch(err) {
        res.status(401).send({success: false, message: "Unable to delete cart items"});
    }
    await next;
};


module.exports = {
    list,
    listOne,
    create,
    update,
    erase
};
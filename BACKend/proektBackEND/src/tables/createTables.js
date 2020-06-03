const usersTable = `
CREATE TABLE IF NOT EXISTS users(
    id INT(10) NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NOT NULL,
    lastName VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    phoneNumber VARCHAR(25),
    username VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_on VARCHAR(25),
    PRIMARY KEY (id)
)`;

const paymentCards = `
CREATE TABLE IF NOT EXISTS paymentCards(
    id INT(10) NOT NULL AUTO_INCREMENT,
    cardHolder CHAR(55) NOT NULL,
    cardNumber VARCHAR(55) NOT NULL,
    expirationDate VARCHAR(25) NOT NULL,
    PRIMARY KEY (id),
    userID INT(10),
    FOREIGN KEY (userID) REFERENCES users(id)
)`;

const items = `
CREATE TABLE IF NOT EXISTS items(
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(55) NOT NULL,
    price INT(10) NOT NULL,
    location CHAR(25),
    PRIMARY KEY (id)
)`;

const cart = `
CREATE TABLE IF NOT EXISTS cart(
    id INT(10) NOT NULL AUTO_INCREMENT,
    dateInserted VARCHAR(25),
    PRIMARY KEY (id),
    userID INT(10),
    FOREIGN KEY (userID) REFERENCES users(id),
    itemsID INT(10),
    FOREIGN KEY (itemsID) REFERENCES items(id)
)`;

const orders = `
CREATE TABLE IF NOT EXISTS orders(
    id INT(10) NOT NULL AUTO_INCREMENT,
    dateOrdered VARCHAR(25),
    PRIMARY KEY (id),
    userID INT(10),
    FOREIGN KEY (userID) REFERENCES users(id),
    paymentCardsID INT(10),
    FOREIGN KEY (paymentCardsID) REFERENCES paymentCards(id),
    itemsID INT(10),
    FOREIGN KEY (itemsID) REFERENCES items(id),
    cartID INT(10),
    FOREIGN KEY (cartID) REFERENCES cart(id)
)`;

module.exports = {
    usersTable,
    paymentCards,
    items,
    cart,
    orders
};
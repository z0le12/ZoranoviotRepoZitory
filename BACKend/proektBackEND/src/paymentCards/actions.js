const database = require('../database/mysql.js');

const { con } = database;

function listAllCards() {
  const listingPaymentCards = 'SELECT * FROM paymentCards';
    return new Promise((resolve, reject) => {
    con.query(listingPaymentCards, (err, results) => {
      if (err) {
        reject(err);
        console.error(err);
      } else {
      resolve(results);
      }
    })
  })
};

const list = async (req, res, next) => {
  try {
    const cards = await listAllCards();
    res.status(200).send({success: true, message: "A list of all payment cards stored in database", body: cards});
  } catch(err) {
    res.status(500).send(err.message);
  }
  await next;
};

function listSingleCard(userID) {
    const listingSingleCard = 'SELECT users.firstName, users.lastName, users.phoneNumber, users.email, users.username, paymentCards.cardHolder, paymentCards.cardNumber, paymentCards.expirationDate FROM users INNER JOIN paymentCards ON users.id = paymentCards.userID WHERE users.id = ?';
    return new Promise((resolve, reject) => {
        con.query(listingSingleCard, [userID], (err, results) => {
        if(err) {
            reject(err)
        } else {
            resolve(results)
        }
        });
    });
};

const listOne = async (req, res, next) => {
    const userID = req.params.userID;

    try{
        const card = await listSingleCard(userID);
        res.status(200).send({succes: true, message: `Payment card from the user with ID ${userID}`, body: card});
    } catch(err) {
        res.status(404).send({succes: false, message: `cannot find card for the provided user with ID ${userID}`});
    }
    await next;
};

function createCards(userID, cardHolder, cardNumber, expirationDate) {
    const createCardsQuery = "INSERT INTO paymentCards (userID, cardHolder, cardNumber, expirationDate) VALUES (?, ?, ?, ?)";
    return new Promise((resolve, reject) => {
        con.query(createCardsQuery, [userID, cardHolder, cardNumber, expirationDate], (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results)
            }
        });
    });
};

const create = async(req, res, next) => {
    const userID = req.params.userID;
    const cardHolder = req.body.cardHolder;
    const cardNumber = req.body.cardNumber;
    const expirationDate = req.body.expirationDate;

    try{
        const newCard = await createCards(userID, cardHolder, cardNumber, expirationDate);
        res.status(201).send({success: true, message: `New card has been added to the user with ID ${userID}`, body: newCard})
    } catch(err) {
        res.status(401).send(err.message);
    }
};

function deleteCards(userID) {
    const deleteCardsQuery = "DELETE FROM paymentCards WHERE userID = ?";
    return new Promise((resolve, reject) => {
        con.query(deleteCardsQuery, [userID], (err, results) => {
            if(err) {
                reject(err)
            } else {
                resolve(results)
            }
        });
    });
};

const erase = async (req, res, next) => {
    const userID = req.params.userID;

    try{
        const deletedCard = await deleteCards(userID);
        res.status(200).send({success: true, message: `card for the provided user with ID ${userID} has been deleted`});
    } catch(err) {
        res.status(200).send(err.message);
    }
};

module.exports = {
    list,
    listOne,
    create,
    erase
};
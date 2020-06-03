const express = require('express');
const paymentCardsRouter = express.Router();

const actions = require('./actions.js');

const { list, listOne, create, erase } = actions;

paymentCardsRouter.get('/paymentCards/', list);
paymentCardsRouter.get('/paymentCards/:userID/', listOne);
paymentCardsRouter.post('/paymentCards/:userID/', create);
paymentCardsRouter.delete('/paymentCards/:userID/', erase);

module.exports = paymentCardsRouter;
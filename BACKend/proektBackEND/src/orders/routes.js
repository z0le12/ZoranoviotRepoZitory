const express = require('express');
const ordersRouter = express.Router();

const actions = require('./actions.js');

const { list, listOne, order, erase } = actions;

ordersRouter.get('/orders/', list);
ordersRouter.get('/orders/:userID', listOne);
ordersRouter.post('/orders/:userID', order);
ordersRouter.delete('/orders/:id', erase);

module.exports = ordersRouter;
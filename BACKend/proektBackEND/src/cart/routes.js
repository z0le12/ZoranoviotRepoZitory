const express = require('express');
const cartRouter = express.Router();

const actions = require('./actions.js');
const { list, listOne, create, update, erase } = actions;

cartRouter.get('/cart/', list);
cartRouter.get('/cart/:usersID', listOne);
cartRouter.post('/cart/:id', create);
cartRouter.put('/cart/:id', update);
cartRouter.delete('/cart/:userID', erase);

module.exports = cartRouter;
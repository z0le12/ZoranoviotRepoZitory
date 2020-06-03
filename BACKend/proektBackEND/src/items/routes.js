const express = require('express');
const itemsRouter = express.Router();

const actions = require('./actions.js');

const { list, listOne, create, erase } = actions;

itemsRouter.get('/items/', list);
itemsRouter.get('/items/:id', listOne);
itemsRouter.post('/items/', create);
itemsRouter.delete('/items/', erase);

module.exports = itemsRouter;
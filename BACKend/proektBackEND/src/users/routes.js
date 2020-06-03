const express = require('express');
const usersRouter = express.Router();

const actions = require('./actions.js');

const { response, list, listOne, create, del, update, logIn, search } = actions;

usersRouter.get('/nikola/', response);
usersRouter.get('/users/', list);
usersRouter.get('/users/:id', listOne);
usersRouter.post('/users/', create);
usersRouter.delete('/users/:id', del);
usersRouter.put('/users/:id', update);
usersRouter.post('/login/', logIn);
usersRouter.get('/search/:name', search);

module.exports = usersRouter;
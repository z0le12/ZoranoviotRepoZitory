const express = require('express');
const publicRouter = express.Router();

const actions = require('./actions.js');

const { getPublicHTML } = actions;

publicRouter.get('/public/', getPublicHTML);

module.exports = publicRouter;
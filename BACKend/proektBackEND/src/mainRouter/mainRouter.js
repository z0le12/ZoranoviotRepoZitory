const express = require('express');
const mainRouter = express.Router();

const users = require('../users/index.js');
const paymentCards = require('../paymentCards/index.js');
const items = require('../items/index.js');
const cart = require('../cart/index.js');
const orders = require('../orders/index.js');
const public = require('../public/index.js');

const { routes } = users;
const { paymentCardsRoutes } = paymentCards;
const { itemsRoutes } = items;
const { cartRoutes } = cart;
const { ordersRoutes } = orders;
const { publicRoutes } = public

mainRouter.use(routes, paymentCardsRoutes, itemsRoutes, cartRoutes, ordersRoutes, publicRoutes);

module.exports = mainRouter;
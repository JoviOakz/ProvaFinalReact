const express = require('express');
const route = express.Router();
const LendingController = require('../controllers/LendingController');

route
    .get('/dates', LendingController.getDates)

module.exports = route;
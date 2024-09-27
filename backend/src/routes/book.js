const express = require('express');
const route = express.Router();
const BookController = require('../controllers/BookController');

route
    .post('/register', BookController.register)
    .get('/book', BookController.getByTitle)

module.exports = route;
const express = require('express');
const route = express.Router();
const authMiddleware = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

route
    .post('/register', UserController.register)
    .post('/login', UserController.login)
    .put('/email', authMiddleware, UserController.updateEmail)
    .put('/phone', authMiddleware, UserController.updatePhone)

module.exports = route;
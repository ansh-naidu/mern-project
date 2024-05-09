// users.js

const express = require('express');
const router = express.Router();
const User = require('./User');
const authController = require('../controllers/authController');

// Register route
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

module.exports = router;

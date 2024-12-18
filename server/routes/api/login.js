const express = require('express');
const Router = express.Router();
const path = require('path');
const authorization = require(path.join(__dirname, '../','../', 'controllers', 'authController.js'))

Router.route('').post(authorization.handleLogin)

module.exports = Router;
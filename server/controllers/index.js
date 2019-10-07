const controllers = require('express').Router();

const apiController = require('./api');

controllers.use('/api', apiController);

module.exports = controllers;

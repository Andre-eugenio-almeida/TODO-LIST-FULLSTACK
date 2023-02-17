const express = require('express');
const tasksController = require('./controllers/tasksController');
const { routes } = require('./app');

const router =express.Router();

router.get('/tasks',  tasksController.getAll);



module.exports =  router;
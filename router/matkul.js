const express = require('express');
const routeMatkul = express.Router();
const matkulController = require('../controller/matkulController');

routeMatkul.post('/', matkulController.create);
routeMatkul.get('/get', matkulController.getAll);
routeMatkul.get('/get/:id', matkulController.getById);
routeMatkul.put('/update/:id', matkulController.update);
routeMatkul.delete('/delete/:id', matkulController.delete);

module.exports = routeMatkul;

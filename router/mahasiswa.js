const express = require('express');
const routeMahasiswa = express.Router();
const mahasiswaController = require('../controller/mahasiswaController');

routeMahasiswa.post('/', mahasiswaController.create);
routeMahasiswa.get('/get', mahasiswaController.getAll);
routeMahasiswa.get('/get/:id', mahasiswaController.getById);
routeMahasiswa.put('/update/:id', mahasiswaController.update);
routeMahasiswa.delete('/delete/:id', mahasiswaController.delete);

module.exports = routeMahasiswa;

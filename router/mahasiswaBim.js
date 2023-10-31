const express = require('express');
const routeMahasiswaBim = express.Router();
const mahasiswaBimController = require('../controller/mahasiswaBimController');

routeMahasiswaBim.post('/', mahasiswaBimController.create);
routeMahasiswaBim.get('/get', mahasiswaBimController.getAll);
routeMahasiswaBim.get('/get/:id', mahasiswaBimController.getByid);
routeMahasiswaBim.put('/update/:id', mahasiswaBimController.update);
routeMahasiswaBim.delete('/delete/:id', mahasiswaBimController.delete);

module.exports = routeMahasiswaBim;

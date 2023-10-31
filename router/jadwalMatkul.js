const express = require('express');
const routeJadwalMatkul = express.Router();
const jadwalMatkulController = require('../controller/jadwalMatkulController');

routeJadwalMatkul.post('/', jadwalMatkulController.create);
routeJadwalMatkul.get('/get', jadwalMatkulController.getAll);
routeJadwalMatkul.get('/get/:id', jadwalMatkulController.getById);
routeJadwalMatkul.put('/update/:id', jadwalMatkulController.update);
routeJadwalMatkul.delete('/delete/:id', jadwalMatkulController.delete);

module.exports = routeJadwalMatkul;

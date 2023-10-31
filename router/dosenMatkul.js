const express = require('express');
const routeDosenMatkul = express.Router();
const dosenMatkulController = require('../controller/dosenMatkulController');

routeDosenMatkul.post('/', dosenMatkulController.create);
routeDosenMatkul.get('/get', dosenMatkulController.getAll);
routeDosenMatkul.get('/get/:id', dosenMatkulController.getById);
routeDosenMatkul.put('/update/:id', dosenMatkulController.update);
routeDosenMatkul.delete('/delete/:id', dosenMatkulController.delete);

module.exports = routeDosenMatkul;

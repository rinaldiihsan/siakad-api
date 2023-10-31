const express = require('express');
const routeDosen = express.Router();
const dosenController = require('../controller/dosenController');

routeDosen.post('/', dosenController.create);
routeDosen.get('/get', dosenController.getAll);
routeDosen.get('/get/:id', dosenController.getById);
routeDosen.put('/update/:id', dosenController.update);
routeDosen.delete('/delete/:id', dosenController.delete);

module.exports = routeDosen;

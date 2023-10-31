const express = require('express');
const exampleController = require('../controller/exampleController');
const routeMahasiswa = require('./mahasiswa');
const routeDosen = require('./dosen');
const routeMatkul = require('./matkul');
const routeDosenMatkul = require('./dosenMatkul');
const routeJadwalMatkul = require('./jadwalMatkul');
const routeMahasiswaBim = require('./mahasiswaBim');
const route = express.Router();

route.get('/', exampleController.index);
route.use('/mahasiswa', routeMahasiswa);
route.use('/dosen', routeDosen);
route.use('/matkul', routeMatkul);
route.use('/dosenMatkul', routeDosenMatkul);
route.use('/jadwalMatkul', routeJadwalMatkul);
route.use('/mahasiswaBimbingan', routeMahasiswaBim);

module.exports = route;

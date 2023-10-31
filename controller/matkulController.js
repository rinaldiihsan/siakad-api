const { MataKuliah } = require('../models');

const matkulController = {};

/*
    this is auto generate example, you can continue 

*/
matkulController.index = async (req, res) => {
  res.json({
    message: 'Hello matkulController',
  });
};

matkulController.create = async (req, res) => {
  const { kode_matkul, nama, sks } = req.body;
  try {
    const createMatkul = await MataKuliah.create({
      kode_matkul: kode_matkul,
      nama: nama,
      sks: sks,
    });
    return res.status(201).json({
      message: 'Data berhasil ditambahkan!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matkulController.getAll = async (req, res) => {
  try {
    const getAllMatkul = await MataKuliah.findAll();
    return res.status(200).json({
      message: 'Data berhasil ditemukan!',
      data: getAllMatkul,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matkulController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getMatkul = await MataKuliah.findOne({
      where: {
        id: id,
      },
    });
    if (getMatkul === null) {
      return res.status(404).json({
        message: 'Data tidak ditemukan!',
      });
    }
    return res.status(200).json({
      message: 'Data berhasil ditemukan!',
      data: getMatkul,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matkulController.update = async (req, res) => {
  const { id } = req.params;
  const { kode_matkul, nama, sks } = req.body;
  try {
    const updateMatkul = await MataKuliah.update(
      {
        kode_matkul: kode_matkul,
        nama: nama,
        sks: sks,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      message: 'Data berhasil diupdate!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

matkulController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMatkul = await MataKuliah.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: 'Data berhasil dihapus!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

module.exports = matkulController;

const { JadwalMatkul, MataKuliah } = require('../models');
const jadwalmatkul = require('../models/jadwalmatkul');

const jadwalMatkulController = {};

/*
    this is auto generate example, you can continue 

*/
jadwalMatkulController.index = async (req, res) => {
  res.json({
    message: 'Hello jadwalMatkulController',
  });
};

jadwalMatkulController.create = async (req, res) => {
  const { id_matkul, hari, jam } = req.body;
  try {
    const getMatkul = await MataKuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getMatkul === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      const createJadwalMatkul = await JadwalMatkul.create({
        id_matkul: getMatkul.id,
        hari: hari,
        jam: jam,
      });
      return res.status(201).json({
        message: 'Data berhasil ditambahkan!',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

jadwalMatkulController.getAll = async (req, res) => {
  try {
    const getAllJadwalMatkul = await MataKuliah.findAll({
      include: [
        {
          model: JadwalMatkul,
        },
      ],
    });
    return res.status(200).json({
      data: getAllJadwalMatkul,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

jadwalMatkulController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getJadwalMatkulById = await JadwalMatkul.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: MataKuliah,
        },
      ],
    });
    if (getJadwalMatkul === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      return res.status(200).json({
        data: getJadwalMatkulById,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

jadwalMatkulController.update = async (req, res) => {
  const { id } = req.params;
  const { id_matkul, hari, jam } = req.body;
  try {
    const getMatkul = await MataKuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getMatkul === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      const updateJadwalMatkul = await JadwalMatkul.update(
        {
          id_matkul: getMatkul.id,
          hari: hari,
          jam: jam,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(201).json({
        message: 'Data berhasil diupdate!',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

jadwalMatkulController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteJadwalMatkul = await JadwalMatkul.destroy({
      where: {
        id: id,
      },
    });
    if (deleteJadwalMatkul === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      return res.status(200).json({
        message: 'Data berhasil dihapus!',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = jadwalMatkulController;

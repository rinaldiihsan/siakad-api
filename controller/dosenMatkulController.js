const { Dosen, MataKuliah, DosenMatkul } = require('../models');

const dosenMatkulController = {};

/*
    this is auto generate example, you can continue 

*/
dosenMatkulController.index = async (req, res) => {
  res.json({
    message: 'Hello dosenMatkulController',
  });
};

dosenMatkulController.create = async (req, res) => {
  const { id_dosen, id_matkul } = req.body;
  try {
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    const getMatkul = await MataKuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getDosen === null || getMatkul === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      const createDosenMatkul = await DosenMatkul.create({
        id_dosen: getDosen.id,
        id_matkul: getMatkul.id,
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

dosenMatkulController.getAll = async (req, res) => {
  try {
    const getAllDosenMatkul = await Dosen.findAll({
      include: [
        {
          model: MataKuliah,
        },
      ],
    });
    return res.status(200).json({
      data: getAllDosenMatkul,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

dosenMatkulController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getDosenMatkulById = await Dosen.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: MataKuliah,
        },
      ],
    });
    if (getDosenMatkulById === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      return res.status(200).json({
        data: getDosenMatkulById,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

dosenMatkulController.update = async (req, res) => {
  const { id } = req.params;
  const { id_dosen, id_matkul } = req.body;
  try {
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    const getMatkul = await MataKuliah.findOne({
      where: {
        id: id_matkul,
      },
    });
    if (getDosen === null || getMatkul === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      const updateDosenMatkul = await DosenMatkul.update(
        {
          id_dosen: getDosen.id,
          id_matkul: getMatkul.id,
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

dosenMatkulController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteDosenMatkul = await DosenMatkul.destroy({
      where: {
        id: id,
      },
    });
    if (deleteDosenMatkul === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      return res.status(201).json({
        message: 'Data berhasil dihapus!',
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = dosenMatkulController;

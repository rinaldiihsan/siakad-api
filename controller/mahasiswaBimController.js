const { Mahasiswa, Dosen, MahasiswaBimbingan } = require('../models');

const mahasiswaBimController = {};

/*
    this is auto generate example, you can continue 

*/
mahasiswaBimController.index = async (req, res) => {
  res.json({
    message: 'Hello mahasiswaBimController',
  });
};

mahasiswaBimController.create = async (req, res) => {
  const { id_mahasiswa, id_dosen } = req.body;
  try {
    const getMahasiswa = await Mahasiswa.findOne({
      where: {
        id: id_mahasiswa,
      },
    });
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    if (getMahasiswa === null || getDosen === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      const createMahasiswaBimbingan = await MahasiswaBimbingan.create({
        id_mahasiswa: getMahasiswa.id,
        id_dosen: getDosen.id,
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

mahasiswaBimController.getAll = async (req, res) => {
  try {
    const getAllMahasiswaBimbingan = await Mahasiswa.findAll({
      include: [
        {
          model: Dosen,
        },
      ],
    });
    return res.status(200).json({
      data: getAllMahasiswaBimbingan,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

mahasiswaBimController.getByid = async (req, res) => {
  const { id } = req.params;
  try {
    const getMahasiswaBimbingan = await Mahasiswa.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Dosen,
        },
      ],
    });
    if (getMahasiswaBimbingan === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      return res.status(200).json({
        data: getMahasiswaBimbingan,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

mahasiswaBimController.update = async (req, res) => {
  const { id } = req.params;
  const { id_mahasiswa, id_dosen } = req.body;
  try {
    const getMahasiswaBimbingan = await Mahasiswa.findOne({
      where: {
        id: id,
      },
    });
    const getMahasiswa = await Mahasiswa.findOne({
      where: {
        id: id_mahasiswa,
      },
    });
    const getDosen = await Dosen.findOne({
      where: {
        id: id_dosen,
      },
    });
    if (getDosen === null || getMahasiswa === null) {
      throw Error('Data tidak ditemukan!');
    } else {
      const updateMahasiswaBimbingan = await MahasiswaBimbingan.update(
        {
          id_mahasiswa: getMahasiswa.id,
          id_dosen: getDosen.id,
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
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

mahasiswaBimController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMahasiswaBimbingan = await MahasiswaBimbingan.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json({
      message: 'Data berhasil dihapus!',
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = mahasiswaBimController;

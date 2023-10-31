const { Mahasiswa } = require('../models');

const mahasiswaController = {};

/*
    this is auto generate example, you can continue 

*/
mahasiswaController.index = async (req, res) => {
  res.json({
    message: 'Hello mahasiswaController',
  });
};

mahasiswaController.create = async (req, res) => {
  const { nama, nim, alamat } = req.body;
  try {
    const createMahasiswa = await Mahasiswa.create({
      nama: nama,
      nim: nim,
      alamat: alamat,
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

mahasiswaController.getAll = async (req, res) => {
  try {
    const getMahasiswa = await Mahasiswa.findAll({
      order: [['createdAt', 'DESC']],
    });
    return res.status(200).json({
      message: 'Data berhasil ditampilkan!',
      data: getMahasiswa,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

mahasiswaController.getById = async (req, res) => {
  const { id } = req.params;
  try {
    const getMahasiswaById = await Mahasiswa.findOne({
      where: {
        id: id,
      },
    });
    if (getMahasiswaById === null) {
      return res.status(404).json({
        message: 'Data tidak ditemukan!',
      });
    }
    return res.status(200).json({
      message: 'Data berhasil ditampilkan!',
      data: getMahasiswaById,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

mahasiswaController.update = async (req, res) => {
  const { id } = req.params;
  const { nama, nim, alamat } = req.body;
  try {
    const updateMahasiswa = await Mahasiswa.update(
      {
        nama: nama,
        nim: nim,
        alamat: alamat,
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

mahasiswaController.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMahasiswa = await Mahasiswa.destroy({
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

module.exports = mahasiswaController;

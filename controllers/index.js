const { User } = require("../models");
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getUser = async (req, res) => {
  try {
    const getData = await User.findAll(req.params);
    return res.status(201).json({
      getData,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const putUser = async (req, res) => {
  try {
    const updateUser = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(201).json({
      updateUser,
      status: "Data berhasil di update",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createUser,
  getUser,
  putUser,
};

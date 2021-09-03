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
module.exports = {
  createUser,
  getUser,
};

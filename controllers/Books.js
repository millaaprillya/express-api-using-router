const { Books } = require("../models");

const getBook = async (req, res) => {
  try {
    const getbook = await Book.findAll(req.params);
    return res.status(201).json({
      getbook,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
const createBook = async (req, res) => {
  try {
    await Book.create(req.body);
    res.json({
      message: " Boook Created",
    });
  } catch (err) {
    console.log(err);
  }
};
const putBook = async (req, res) => {
  try {
    await putBook = await Book.findAll(req.params);
    return res.status(201).json({
      getbook,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getBook,
  createBook,
  putBook,
};

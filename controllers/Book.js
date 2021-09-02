const { Book } = require("../models");
const createBook = async (req, res) => {
  try {
    const Book = await Book.create(req.body);
    return res.status(201).json({
      Book,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createBook,
};

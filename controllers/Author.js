const { Author } = require("../models");
const createAuthor = async (req, res) => {
  try {
    const Author = await Author.create(req.body);
    return res.status(201).json({
      Author,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  createAuthor,
};

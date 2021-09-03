module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      // Define attributes
      author_id: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      publish: {
        type: DataTypes.STRING,
      },
    },
    {
      // Freeze Table Name
      freezeTableName: true,
    }
  );
  return Book;
};

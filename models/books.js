module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      author_id: DataTypes.STRING,
      title: DataTypes.STRING,
      publish: DataTypes.STRING,
    },
    {}
  );
  Book.associate = function (models) {
    // associations can be defined heare
    Book.hasMany(models.Book, {
      foreignKey: "userId",
    });
  };
  return Book;
};

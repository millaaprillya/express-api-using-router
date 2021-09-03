module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    "Books",
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
  return Books;
};

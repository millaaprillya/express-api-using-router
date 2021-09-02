module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Author",
    {
      name: DataTypes.STRING,
      organization: DataTypes.STRING,
    },
    {}
  );
  Author.associate = function (models) {
    // associations can be defined heare
    Author.hasMany(models.Author, {
      foreignKey: "userId",
    });
  };
  return Author;
};

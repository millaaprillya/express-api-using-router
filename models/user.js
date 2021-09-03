module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {}
  );
  Users.associate = function (models) {
    // associations can be defined heare
    // User.hasMany(models.Project, {
    //   foreignKey: "id",
    // });
  };
  return Users;
};

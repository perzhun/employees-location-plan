module.exports = (sequelize, DataTypes) =>
  sequelize.define("Employee", {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING,
    note: DataTypes.STRING,
    photo: DataTypes.STRING
  });

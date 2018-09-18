module.exports = (sequelize, DataTypes) =>
  sequelize.define("ChosenEmployee", {
    name: DataTypes.STRING,
    cellId: DataTypes.INTEGER,
    floor: DataTypes.STRING
  });

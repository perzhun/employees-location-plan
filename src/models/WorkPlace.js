module.exports = (sequelize, DataTypes) =>
  sequelize.define("WorkPlace", {
    cell: DataTypes.INTEGER,
    floor: DataTypes.STRING
  });

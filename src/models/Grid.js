module.exports = (sequelize, DataTypes) =>
  sequelize.define("Grid", {
    collumsAndRows: DataTypes.INTEGER,
    floor: {
      type: DataTypes.STRING,
      unique: true
    }
  });

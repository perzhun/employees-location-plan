const sequelize_fixtures = require("sequelize-fixtures");
const Sequelize = require("sequelize");
const path = require("path");

const models = require("../models");
const fixtures = require("./EmployeesData");

module.exports = {
  loadFixtures: () => {
    sequelize_fixtures.loadFixtures(fixtures, models).then(function() {
      console.log(
        "Fixtures have been loaded, check your database tables ;) !!!"
      );
    });
  }
};

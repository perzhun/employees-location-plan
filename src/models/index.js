const fs = require('fs');
const path = require('path');
var env = process.env.NODE_ENV || "development";
const Sequelize = require('sequelize');
const config = require('../config/config');

const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

sequelize.authenticate().then(function() {
    console.log('Database connected and authenticated!');
    return true;
  }).catch(function(err) {
    console.error('Failed to connect and authenticate', err);
    return false;
  });

fs.readdirSync(__dirname).filter((file) => 
    file !== 'index.js'
).forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

// const models = require("../models/user_individuals.model")(
//   sequelize,
//   DataTypes
// );

// const db = { sequelize, Sequelize, models };
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user_individuals.model.js")(sequelize, DataTypes);
db.module.exports = db;

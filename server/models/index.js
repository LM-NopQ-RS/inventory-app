const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const { User } = require("./user");

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = {
  db: sequelize,
  Sauce,
  User,
};

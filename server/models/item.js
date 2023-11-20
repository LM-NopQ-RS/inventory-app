const { sequelize, DataTypes } = require("../db");
const { Sequelize } = require("sequelize");

//Item model with name, description, price, category and image.

const Item = sequelize.define("items", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.INTEGER,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
});

module.exports = Item;

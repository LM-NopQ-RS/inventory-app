const { sequelize } = require("../db");

//Item model with name, description, price, category and image.

const Item = sequelize.define("items", {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.INTEGER,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
});

module.exports = Item;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); // Make sure this path is correct

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'category'  // Ensure the table name is correct in your DB
});

module.exports = Category;

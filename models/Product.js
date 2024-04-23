// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
//const Category = require('../category/Category'); // Adjust the path as needed
//const Tag = require('../tag/Tag'); // Adjust the path as needed
//const ProductTag = require('../productTag/ProductTag'); // Adjust the path as needed


// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
   type: DataTypes.INTEGER,
   allowNull:false,
   primaryKey:true,
   autoIncrement:true
 },
   product_name:{
    type:DataTypes.STRING,
    allowNull:false
  }},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);
// Define associations
//Product.belongsTo(Category, {
 // foreignKey: 'category_id'
//});

//Product.belongsToMany(Tag, {
 // through: ProductTag
//});

module.exports = Product;

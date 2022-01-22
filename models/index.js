const Sequelize = require('sequelize');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const User = require('./users');
const Ingredient = require('./ingredients');
const RecipeDescription = require('./recipeDescriptions');
const Tool = require('./tools');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Ingredient = Ingredient;
db.RecipeDescription = RecipeDescription;
db.Tool = Tool;

User.init(sequelize);
Ingredient.init(sequelize);
RecipeDescription.init(sequelize);
Tool.init(sequelize);

User.associate(db);
Ingredient.associate(db);
RecipeDescription.associate(db);
Tool.associate(db);

module.exports = db;
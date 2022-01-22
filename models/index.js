const Sequelize = require('sequelize');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const User = require('./users');
const Refrigerator = require('./refrigerator');
const Ingredient = require('./ingredients');
const RecipeDescription = require('./recipeDescriptions');
const RecipeIngredient = require('./RecipeIngredient');

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Refrigerator = Refrigerator;
db.Ingredient = Ingredient;
db.RecipeDescription = RecipeDescription;
db.RecipeIngredient = RecipeIngredient;

User.init(sequelize);
Refrigerator.init(sequelize);
Ingredient.init(sequelize);
RecipeDescription.init(sequelize);
RecipeIngredient.init(sequelize);

User.associate(db);
Refrigerator.associate(db);
Ingredient.associate(db);
RecipeDescription.associate(db);
RecipeIngredient.associate(db);

module.exports = db;
const Sequelize = require('sequelize');

module.exports = class RecipeIngredient extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'RecipeIngredient',
            tableName: 'recipeIngredients',
            paranoid: false,
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.RecipeIngredient.belongsTo(db.RecipeDescription, { foreignKey: 'decriptionIdRecipe', targetKey: 'id' });
        db.RecipeIngredient.belongsTo(db.Ingredient, { foreignKey: 'ingredientIdRecipe', targetKey: 'id' });
    }
};
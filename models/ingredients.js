const Sequelize = require('sequelize');

module.exports = class Ingredient extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            unit: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Ingredient',
            tableName: 'ingredients',
            paranoid: false,
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Ingredient.hasOne(db.Refrigerator, { foreignKey: 'ingredientIdFridge', sourceKey: 'id' });
        db.Ingredient.hasMany(db.RecipeIngredient, { foreignKey: 'ingredientIdRecipe', sourceKey: 'id' });
    }
};
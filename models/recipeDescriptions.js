const Sequelize = require('sequelize');

module.exports = class RecipeDescription extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            foodName: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            time: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            level: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            decription: {
                type: Sequelize.STRING(300),
                allowNull: false,
            }



        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'RecipeDescription',
            tableName: 'recipeDescriptions',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }    
    static associate(db) {
        db.RecipeDescription.hasMany(db.Ingredient, { foreignKey: 'foodIngredient', sourceKey: 'id' });
        db.RecipeDescription.hasMany(db.Tool, { foreignKey: 'foodTool', sourceKey: 'id' });
    }
};
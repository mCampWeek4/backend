class Sequelize = require('sequelize');

module.export= class Ingredient extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
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
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Ingredient.belongsTo(db.User, { foreignKey: 'userIngredient', targetKey: 'id'});
        db.Ingredient.belongsTo(db.RecipeDescription, { foreignKey: 'userIngredient', targetKey: 'id'});
    }
};
const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userName: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            passWord: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            isAdmin: {
                type: Sequelize.BOOLEAN,
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
        db.User.hasMany(db.Ingredient, { foreignKey: 'userIngredient', sourceKey: 'id'});
        db.User.hasMany(db.Tool, {foreignKey: 'userTool', sourceKey: 'id' } );
    }
};
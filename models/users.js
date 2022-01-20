class Sequelize = require('sequelize');

module.export= class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            userName: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            passWd: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            isAdmin: {
                type: Sequelize.TINY_INT,
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
            db.User.hasMany(db.Ingredient, { foreignKey: 'userIngredient', soucekey: 'id'});
        }
};
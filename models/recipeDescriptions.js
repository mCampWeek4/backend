class Sequelize = require('sequelize');

module.export= class recipeDescription extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            foodName: {
                type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
            },
            time: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            level: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            decription: {
                type: Sequelize.Text,
                allowNull: false,
            }



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
    }    static associate(db) {}
};
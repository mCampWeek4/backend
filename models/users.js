const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
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
        db.User.hasOne(db.Refrigerator, { foreignKey: 'userIdFridge', sourceKey: 'id' });
    }
};
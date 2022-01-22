const Sequelize = require('sequelize');

module.exports = class Refrigerator extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Refrigerator',
            tableName: 'refrigerators',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Refrigerator.belongsTo(db.User, { foreignKey: 'userIdFridge', targetKey: 'id' });
        db.Refrigerator.belongsTo(db.Ingredient, { foreignKey: 'ingredientIdFridge', targetKey: 'id' });
    }
};
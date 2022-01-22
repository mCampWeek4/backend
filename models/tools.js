const Sequelize = require('sequelize');

module.exports = class Tool extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
                unique: true,
            },
            type: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Tool',
            tableName: 'tools',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci'
        });
    }
    static associate(db) {
        db.Tool.belongsTo( db.RecipeDescription, {foreignKey: 'foodTool' , targetKey: 'id'});
        db.Tool.belongsTo( db.User, { foreignKey: 'userTool', targetKey: 'id' });
    }
};
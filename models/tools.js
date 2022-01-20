class Sequelize = require('sequelize');

module.export= class Tool extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.INTEGER,
                allowNull: false,
                unique: true,
            },
            type: {
                type: Sequelize.INTEGER,
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
        db.Tool.belongsTo( db.RecipeDescription, {foreignKey: 'foodTool' , targetKey: 'id'});
    }
};
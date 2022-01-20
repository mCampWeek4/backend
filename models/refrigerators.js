// class Sequelize = require('sequelize');

// module.export= class Refrigerator extends Sequelize.Model {
//     static init(sequelize) {
//         return super.init({
//             userPk: {
//                 type: Sequelize.STRING(30),
//                 allowNull: false,
//                 unique: true,
//             },
//             passWd: {
//                 type: Sequelize.STRING(30),
//                 allowNull: false,
//             },
//         }, {
//             sequelize,
//             timestamps: false,
//             underscored: false,
//             modelName: 'User',
//             tableName: 'users',
//             paranoid: false,
//             charset: 'utf8',
//             collate: 'utf8_general_ci'
//         });
//     }
// }
const express = require('express');
const RecipeIngredient = require('../models/RecipeIngredient');
const { Op } = require('sequelize');
const sequelize = require('sequelize');

const router = express.Router();

const getRecipe = async(req, res) => {
    try {
        const str = req.params.ingredientIdString;
        const myIngredients = str.split('.');
        const len = parseInt(myIngredients, 10)
        console.log(len);

        const deficientRecipe = await RecipeIngredient.findAll({
            attributes: ['descriptionIdRecipe', [sequelize.fn('COUNT', sequelize.col('ingredientIdRecipe')), 'total']],
            where: {
                ingredientIdRecipe: {
                    [Op.in]: myIngredients
                }
            },
            group: ['descriptionIdRecipe'],
            // order: sequelize.fn('COUNT', sequelize.col('ingredientIdRecipe'))
            order: [
                [sequelize.fn('COUNT', sequelize.col('ingredientIdRecipe')), 'DESC']
            ]
        })



        // const deficientRecipe = await RecipeIngredient.findAndCountAll({
        //     attributes: ['descriptionIdRecipe'],
        //     where: {
        //         ingredientIdRecipe: {
        //             [Op.notIn]: myIngredients
        //         }
        //     },
        //     group: ['descriptionIdRecipe'],
        // })


        // const deficientRecipe = await RecipeIngredient.count({
        //     distinct: 'descriptionIdRecipe',
        //     where: {
        //         ingredientIdRecipe: {
        //             [Op.notIn]: myIngredients
        //         }
        //     }
        // }).then(function(count) {
        //     return {

        //     }
        // });


        console.log(deficientRecipe);
        res.send(deficientRecipe);
    } catch (err) {
        console.error(err);
    }
}


router.route('/:ingredientIdString')
    .get(getRecipe)

module.exports = router;
const express = require('express');
const RecipeIngredient = require('../models/RecipeIngredient');
const Ingredient = require('../models/ingredients');

const router = express.Router();

const getAllIngredient = async(req, res) => {
    try {
        const allIngredient = await Ingredient.findAll({});
        res.send(allIngredient);
    } catch (err) {
        console.error(err);
    }
};

const getFoodIngredient = async(req, res) => {
    try {
        const foodId = parseInt(req.params.foodId, 10);
        console.log(foodId);
        const foodIngredient = await RecipeIngredient.findAll({
            where: {
                descriptionIdRecipe: foodId
            },
            attributes: ['ingredientIdRecipe', 'amount']
        })
        console.log(foodIngredient);
        res.send(foodIngredient)
    } catch (err) {
        console.error(err);
    }
}

router.route('/')
    .get(getAllIngredient)

router.route('/:foodId')
    .get(getFoodIngredient)

module.exports = router;
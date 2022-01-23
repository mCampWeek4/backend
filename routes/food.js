const express = require('express');
const RecipeDescription = require('../models/recipeDescriptions');

const router = express.Router();

const getAllFood = async(req, res) => {
    try {
        const food = await RecipeDescription.findAll({});
        res.send(food);
    } catch (err) {
        console.error(err);
    }
};


const getOneFood = async(req, res) => {
    try {
        let foodName = req.body.foodName;
        // console.log(foodName);
        const food = await RecipeDescription.findOne({
            where: { foodName: foodName }
        });
        console.log(food);
        res.send(food);
    } catch (err) {
        console.log('shouldnt be here');
        console.error(err);
    }
};



router.route('/')
    .get(getAllFood)

router.route('/specific')
    .get(getOneFood)

module.exports = router;
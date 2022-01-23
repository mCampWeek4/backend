const express = require('express');
const RecipeIngredient = require('../models/RecipeIngredient');

const router = express.Router();

const getAllIngredient = async(req, res) => {
    try {
        const allIngredient = await RecipeIngredient.findAll({});
        res.send(allIngredient);
    } catch (err) {
        console.error(err);
    }
};


router.route('/')
    .get(getAllIngredient)

// router.route('/specific')
//     .get(getOneFood)

module.exports = router;
const express = require('express');
const Refrigerator = require('../models/refrigerator');

const router = express.Router();


const getIngredient = async(req, res) => {
    try {
        let uid = parseInt(req.body.userId, 10);
        const user = await Refrigerator.findAll({
            attributes: ['ingredientIdFridge'],
            where: { userIdFridge: uid }
        })
        console.log(user);
        res.send(user);

    } catch (err) {
        console.error(err);
    }
};

const addIngredient = async(req, res) => {
    try {
        let uid = parseInt(req.body.userId, 10)
        let iid = parseInt(req.body.ingredientId, 10)
        console.log(uid + " " + iid);
        const newIngredient = await Refrigerator.create({
            userIdFridge: uid,
            ingredientIdFridge: iid
        })
        res.send('insert successs');
    } catch (err) {
        console.error(err);
    }
};

const deleteIngredient = async(req, res) => {
    try {
        let uid = parseInt(req.body.userId, 10)
        let iid = parseInt(req.body.ingredientId, 10)
        const user = await Refrigerator.destroy({
            where: {
                userIdFridge: uid,
                ingredientIdFridge: iid,
            }
        })
        res.send('delete successs');
    } catch (err) {
        console.error(err);
    }
};

router.route('/ingredient')
    .get(getIngredient)

router.route('/ingredient/add')
    .post(addIngredient)

router.route('/ingredient/delete')
    .post(deleteIngredient)


module.exports = router;
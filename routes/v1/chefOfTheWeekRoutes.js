const express = require('express');
const chefOfTheWeek_controller = require("../../controllers/chefOfTheWeekController");

const router = express.Router();

router.get('/restaurants', chefOfTheWeek_controller.getChefOfTheWeekRestaurants);
router.get('/', chefOfTheWeek_controller.getChefOfTheWeek);
router.put('/', chefOfTheWeek_controller.updateChefOfTheWeek);
router.post('/', chefOfTheWeek_controller.addChefOfTheWeek);
router.delete('/', chefOfTheWeek_controller.deleteChefOfTheWeek);


module.exports = router;

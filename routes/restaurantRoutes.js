const express = require('express');
const restaurant_controller = require("../controllers/restaurant_controller");
const router = express.Router();

router.get('/:id', restaurant_controller.getRestaurant);
router.get('/', restaurant_controller.getRestaurants);
router.post('/', restaurant_controller.postRestaurant);
router.delete('/:id', restaurant_controller.deleteRestaurant);
router.put('/:id', restaurant_controller.updateRestaurant);


module.exports = router;

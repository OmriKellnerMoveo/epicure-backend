const express = require('express');
const restaurant_controller = require("../../controllers/restaurantController");
const popularRoutes = require('./popularRoutes');

const router = express.Router();
router.use('/popular', popularRoutes);
router.get('/:id', restaurant_controller.getRestaurant);
router.get('/', restaurant_controller.getRestaurants);
router.post('/', restaurant_controller.addRestaurant);
router.delete('/:id', restaurant_controller.deleteRestaurant);
router.put('/:id', restaurant_controller.updateRestaurant);


module.exports = router;

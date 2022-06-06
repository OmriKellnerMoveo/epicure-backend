const express = require('express');
const restaurant_controller = require("../../controllers/restaurantController");
const popularRoutes = require('./popularRoutes');
const middlewares = require("../../middlewares/authenticateToken");

const router = express.Router();
router.use('/popular', popularRoutes);
router.get('/:id', restaurant_controller.getRestaurant);
router.get('/', restaurant_controller.getRestaurants);
router.post('/', middlewares.authenticateToken,restaurant_controller.addRestaurant);
router.delete('/:id',middlewares.authenticateToken, restaurant_controller.deleteRestaurant);
router.put('/:id',middlewares.authenticateToken, restaurant_controller.updateRestaurant);


module.exports = router;

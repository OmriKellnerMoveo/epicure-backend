const express = require('express');
const restaurant_handler = require("../../handlers/restaurantHandler");
const router = express.Router();
router.get('/', restaurant_handler.getPopularRestaurants);

module.exports = router;

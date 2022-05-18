const express = require('express');

const router = express.Router();
const chefRoutes = require('./chefRoutes');
const dishRoutes = require('./dishRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/chef',chefRoutes);
router.use('/dish',dishRoutes);
router.use('/restaurant',restaurantRoutes);
router.use('/search',searchRoutes);

module.exports = router;





const express = require('express');

const router = express.Router();
const chefRoutes = require('./chefRoutes');
const dishRoutes = require('./dishRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const searchRoutes = require('./searchRoutes');
const chefOfTheWeekRoutes = require("./chefOfTheWeekRoutes");
const loginRouter = require("./loginRouter");
const registerRouter = require("./registerRouter");

router.use('/chef',chefRoutes);
router.use('/dish',dishRoutes);
router.use('/restaurant',restaurantRoutes);
router.use('/search',searchRoutes);
router.use('/chefOfTheWeek', chefOfTheWeekRoutes);
router.use('/login', loginRouter);
router.use('/register', registerRouter);


module.exports = router;





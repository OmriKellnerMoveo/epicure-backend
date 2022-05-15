const express = require('express');
const router = express.Router();
const chefRoutes = require('../routes/chefRoutes');
const dishRoutes = require('../routes/dishRoutes');
const restaurantRoutes = require('../routes/restaurantRoutes');

const app = express();
const {use} = require("express/lib/router");
app.use('/chef',chefRoutes);
app.use('/dish',dishRoutes);
app.use('/restaurant',restaurantRoutes);
// router('/chef',chefRoutes)
//chef
// router.get('/get-chef/:id', chef_controller.getChef);
// router.get('/get-chef', chef_controller.getChefs);
// router.post('/add-chef', chef_controller.postChef);
// router.delete('/delete-chef/:id', chef_controller.deleteChef);
// router.put('/update-chef/:id', chef_controller.updateChef);
//
// //Restaurant
// router.get('/get-restaurant/:id', restaurant_controller.getRestaurant);
// router.get('/get-restaurant', restaurant_controller.getRestaurants);
// router.post('/add-restaurant', restaurant_controller.postRestaurant);
// router.delete('/delete-restaurant/:id', restaurant_controller.deleteRestaurant);
// router.put('/update-restaurant/:id', restaurant_controller.updateRestaurant);
//
// //Dish
// router.get('/get-dish/:id', dish_controller.getDish);
// router.get('/get-dish', dish_controller.getDishes);
// router.post('/add-dish', dish_controller.postDish);
// router.delete('/delete-dish/:id', dish_controller.deleteDish);
// router.put('/update-dish/:id', dish_controller.updateDish);

module.exports = router;

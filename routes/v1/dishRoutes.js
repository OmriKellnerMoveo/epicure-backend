const express = require('express');
const dish_controller = require("../../controllers/dishController");
const signatureDish = require('./signature-dish');
const middlewares = require("../../middlewares/authenticateToken");

const router = express.Router();
router.use('/signature', signatureDish);
router.get('/', dish_controller.getDishes);
router.post('/',middlewares.authenticateToken, dish_controller.addDish);
router.delete('/:id',middlewares.authenticateToken, dish_controller.deleteDish);
router.put('/:id',middlewares.authenticateToken, dish_controller.updateDish);
// router.get('/restaurants/:id', dish_controller.getRestaurantsByDish);
router.get('/restaurants/:id', dish_controller.getDishesByRestaurants);
router.get('/:id', dish_controller.getDish);



module.exports = router;

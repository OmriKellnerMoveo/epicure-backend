const express = require('express');
const dish_controller = require("../../controllers/dishController");
const signatureDish = require('./signature-dish');

const router = express.Router();

router.get('/', dish_controller.getDishes);
router.post('/', dish_controller.addDish);
router.delete('/:id', dish_controller.deleteDish);
router.put('/:id', dish_controller.updateDish);
router.get('/restaurants/:id', dish_controller.getRestaurantsByDish);
router.get('/:id', dish_controller.getDish);
router.use('/signature', signatureDish);



module.exports = router;

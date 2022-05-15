const express = require('express');
const dish_controller = require("../controllers/dish_controller");
const router = express.Router();

router.get('/:id', dish_controller.getDish);
router.get('/', dish_controller.getDishes);
router.post('/', dish_controller.postDish);
router.delete('/:id', dish_controller.deleteDish);
router.put('/:id', dish_controller.updateDish);

module.exports = router;

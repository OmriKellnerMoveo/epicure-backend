const express = require('express');
const chef_controller = require("../../controllers/chefController");
const chefOfTheWeekRoutes = require("./chefOfTheWeekRoutes");
const router = express.Router();
router.get('/', chef_controller.getChefs);
router.get('/:id', chef_controller.getChef);
router.post('/', chef_controller.addChef);
router.delete('/:id', chef_controller.deleteChef);
router.put('/:id', chef_controller.updateChef);




module.exports = router;

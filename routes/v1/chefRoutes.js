const express = require('express');
const chef_controller = require("../../controllers/chefController");
const middlewares = require("../../middlewares/authenticateToken");



const router = express.Router();
router.get('/', chef_controller.getChefs);
router.get('/:id', chef_controller.getChef);
router.post('/',middlewares.authenticateToken, chef_controller.addChef);
router.delete('/:id', middlewares.authenticateToken,chef_controller.deleteChef);
router.put('/:id',middlewares.authenticateToken, chef_controller.updateChef);




module.exports = router;

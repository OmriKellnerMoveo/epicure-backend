const express = require('express');
const chef_controller = require("../controllers/chef_controller");
const router = express.Router();

router.get('/:id', chef_controller.getChef);
router.get('/', chef_controller.getChefs);
router.post('/', chef_controller.postChef);
router.delete('/:id', chef_controller.deleteChef);
router.put('/:id', chef_controller.updateChef);



module.exports = router;

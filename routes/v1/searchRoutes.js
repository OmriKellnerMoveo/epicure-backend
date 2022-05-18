const express = require('express');
const dish_controller = require("../../handlers/dishHandler");
const router = express.Router();

router.get('/:id', dish_controller.getDishesByName);


module.exports = router;

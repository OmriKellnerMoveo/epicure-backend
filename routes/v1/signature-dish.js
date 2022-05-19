const express = require('express');
const dish_handler = require("../../handlers/dishHandler");
const router = express.Router();
router.get('/', dish_handler.getSignatureDish);

module.exports = router;

const express = require('express');
const router = express.Router();
const v1_Routes = require('../routes/v1/v1_Routes');

router.use('/v1',v1_Routes);

module.exports = router;





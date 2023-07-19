const express = require('express');
const router = express.Router();
const getAllProducts = require('../../middleware/productsController.js');

router.route('/').get(getAllProducts);

module.exports = router;
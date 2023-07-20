const express = require('express');
const router = express.Router();
const productsController = require('../../middleware/productsController.js');

router.route('/')
    .get(productsController.getAllProducts);
router.route('/:id')
    .get(productsController.getProduct);
router.route('/')
    .post(productsController.addNewProduct);
router.route('/:id')
    .put(productsController.productUpdateById);
router.route('/:id')
    .delete(productsController.productDeleteById);

module.exports = router;
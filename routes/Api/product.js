const express = require('express');
const router = express.Router();
const productController = require('../../middleware/productController.js');


router.route('/image')
    .post(productController.upload.single('upload'), productController.uploadImage);


module.exports = router;
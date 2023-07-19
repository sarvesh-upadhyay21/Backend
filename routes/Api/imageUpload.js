const express = require('express');
const router = express.Router();
const imageUploadController = require('../../middleware/imageUploadController.js');


router.route('/image')
    .post(imageUploadController.upload.single('upload'), imageUploadController.uploadImage);


module.exports = router;
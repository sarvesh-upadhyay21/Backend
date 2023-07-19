const multer = require('multer');
const sharp = require('sharp');
const path = require('path');

// Image upload
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/))
        {
            return cb(new Error('Please upload a valid image file'));
        }
        cb(undefined, true);
    }
});
const uploadImage = async (req, res) => {
    try
    {
        await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(path.join(__dirname, '..', 'Images', req.file.originalname));

        res.status(201).send('Image uploaded succesfully');
    } catch (error)
    {
        console.log(error);
        res.status(400).send(error);
    }
};

module.exports = {
    uploadImage,
    upload
};
const express = require('express');
const multer = require('multer');

const {
    processImages
} = require('../controllers/translationController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(
            null,
            Date.now() + '-' + file.originalname
        );
    }
});

const upload = multer({ storage });

router.post(
    '/upload',
    upload.array('images', 20),
    processImages
);

module.exports = router;
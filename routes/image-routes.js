const express = require('express')
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const {uploadImage} = require('../middleware/upload-middleware');
const {uploadImageController, fetchImagesController, deleteImageController} = require('../controllers/image-controller');


const router = express.Router()

//upload the image
router.post('/upload',
    authMiddleware,
    adminMiddleware,
    uploadImage.single('image'),
    uploadImageController);

//get all the image
router.get("/get",authMiddleware,fetchImagesController);

//delete immage route
router.delete('/:id',authMiddleware,adminMiddleware,deleteImageController)


module.exports = router
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookControllers')
router.post('/createUser',userController.createUser)
router.post('/allUserData',userController.userData)

router.post('/createBook',bookController.createBookData)
router.post('/getBook',bookController.getBook)





module.exports = router
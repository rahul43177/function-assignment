const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')
const bookController = require('../controllers/bookControllers')
const authorController = require('../controllers/authorController')
router.post('/createUser',userController.createUser)
router.post('/allUserData',userController.userData)

router.post('/createBook',bookController.createBook)
router.get('/getBooks',bookController.getBooksData)

router.post('/createAuthor',authorController.createAuthor )
router.get('/getAuthors',authorController.getAuthors )



module.exports = router
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const authorController = require('../controllers/authorController')
const bookController = require('../controllers/bookControllers')
const publisherController = require('../controllers/publisherController')

router.post('/createAuthor', authorController.createAuthor)
router.get('/getAuthorsData',authorController.getAuthorsData)

router.post('/createPublisher',publisherController.createPublisher)

router.post('/createBooks',bookController.createBooks)
router.get('/getBooks',bookController.getBookWithAuthorAndPublisher)

router.put('/isHardCover',bookController.isHardCover)
router.put('/updateRating',bookController.updateRating)
module.exports = router
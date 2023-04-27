const mongoose = require('mongoose')
const bookModel = require('../models/bookModel')

let createBookData = async function (req,res) {
    let book = req.body
    let savedData = await bookModel.create(book)
    res.send({msg : savedData , status : true})
} 

let getBook =  async function(req,res) {
    let allBooks = await bookModel.find()
    res.send({data : allBooks})
}

module.exports.createBookData = createBookData
module.exports.getBook = getBook
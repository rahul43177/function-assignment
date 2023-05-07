const mongoose = require('mongoose')
const bookModel = require('../models/bookModel')

let createBook = async function(req,res) {    //created the data here 
    let bookData = req.body 
    let SaveData = await bookModel.create(bookData)
    res.send({data : SaveData , status : true})
}
 
 
let bookList = async function(req,res) {    //here we will use find to get all the data and then we will use select
    let savedData = await bookModel.find().select({bookName : 1 ,authorName : 1})  //1 means we want that data and 0 means we dont't want that data 
    res.send({data : savedData , status : true})
}

let getBooksByYear = async function (req,res){
    let year = req.query.year  //to remember give the input in query not in body
    let booksInYear = await bookModel.find({year:year})
    res.send({msg : booksInYear})
}

let getParticularBooks = async function(req,res) {
    let data = req.body
    let sendBook = await bookModel.find(data)
    res.send({data : sendBook})
}

let getXINRBooks = async function(req,res) {
    let sendBook = await bookModel.find({
        $or : [{"price.indianPrice": "100INR"},{"price.indianPrice":"200INR"},{"price.indianPrice":"500INR"}]
    }) 
    res.send({msg:sendBook})
}
const getRandomBooks = async function(req,res){
    const sendBook = await bookModel.find({
     $or : [ {totalPages : { $gt : 500}},{stockAvailable: true}]
     })
    res.send({msg : sendBook})
}
const bookPrice = async function(req,res) {
    let price = await bookModel.findOne()
    res.send({price})
}





module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksByYear = getBooksByYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
module.exports.bookPrice=bookPrice
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
    let data = req.body.year 
    if  (data == bookModel.find({year : data}) ) {
        let a = bookModel.find().select({year : 1})
        res.send({data : a})
    }
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksByYear = getBooksByYear
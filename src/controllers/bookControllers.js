const booksModel = require("../models/bookModel");
const authorsModel = require("../models/authorModel");
const publisherModel = require('../models/publisherModel');
const bookModel = require("../models/bookModel");
const mongoose = require('mongoose')

//question - 3 (a,b,c,d)
const createBooks = async function(req,res) {
    let book = req.body 
    if(!book.author || !book.publisher) {
        if(!book.author) {
            return res.send({error : "You have to give authorID"})
        }
        else {
            return res.send({error: "You have to give PublisherID"})
        }
    }
    if(book.publisher) {
        if(!mongoose.Types.ObjectId.isValid(book.publisher)) {
            res.send({msg:"Please Provide the valid publisher ID "})
        }
    }
    if(book.author) {
        if(!mongoose.Types.ObjectId.isValid(book.author)) {
            res.send({msg : "Please provide valid author ID"})
        }
    }
    let savedData = await booksModel.create(book)
    res.send({data : savedData})
}


//question - 4th -> Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this)  

let getBookWithAuthorAndPublisher = async function (req,res) {
    let getBooks = await booksModel.find().populate("author").populate("publisher") /** here populate is brining the author detail of that book and also the publisher detail of that book  */
    res.send({bookData : getBooks})
}

//question - 6th -> /** Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
//  b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)  */
const  isHardCover= async(req,res)=>{
    let data= await bookModel.find().populate("publisher");
    let array= data.filter(e=>e.publisher.name=='HarperCollins'||e.publisher.name =="Penguin")
    let arr=[]
     for (let i = 0; i < array.length; i++) {
        const id=array[i]._id
        let update=await bookModel.findByIdAndUpdate(id,{$set:{isHardCover:true}},{new:true})
        arr.push(update)
     }
    return res.send({msg : arr})
  }
  
  
  
  const updateRating=async(req,res)=>{
    let data= await bookModel.find().populate("author")
    let arr=data.filter(e=>e.author)
    let arr2 = arr.filter(e=>e.author.rating>=3.5)
    let array=[]
    for (let i = 0; i < arr2.length; i++) {
       id=arr2[i]._id;
        prize=(arr2[i].price)+10;
       let final=await bookModel.findByIdAndUpdate(id,{ price:`${prize}`},{new:true})
         array.push(final)
        
    }
    res.send(array)
  
  
  
  }



module.exports.createBooks =createBooks
module.exports.getBookWithAuthorAndPublisher =getBookWithAuthorAndPublisher
module.exports.isHardCover=isHardCover
module.exports.updateRating=updateRating





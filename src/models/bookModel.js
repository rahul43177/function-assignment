const mongoose = require('mongoose') //imported the mongoose here 
const bookSchema = new mongoose.Schema({
    name : String ,
    author_id : {
        type : Number ,
        required : true ,
    },
    price : Number ,
    rating : Number
})



module.exports = mongoose.model('Book1',bookSchema)
/*
   { 
        name:"Two states",
        author_id:1,
        price:50,
        ratings:4.5,
    } ,

**/
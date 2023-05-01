const mongoose = require('mongoose') //imported the mongoose here 
const bookSchema = new mongoose.Schema({
    bookName : {
        type : String ,
        required : true , 
    } ,
    prices : {
        indianPrice : String , 
        euroPrice : String
    },
    year : {
        type : Number , 
        default : 2021
    },
    tags : [String] ,
    authorName : String , 
    totalPages : Number ,
    stockAvailable : Boolean
})


module.exports = mongoose.model('Newbook',bookSchema)
const mongoose = require('mongoose') //imported the mongoose here 
const bookSchema = new mongoose.Schema({
    bookName : String ,
    authorName : String ,
    category : {
        type : String ,
        enum : ["horror", "thriller" , "romance" , "self-help"]    
    },
    sales : Number ,
    year : Number
},{timestamps : true})



module.exports = mongoose.model('Book',bookSchema)
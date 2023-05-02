const mongoose = require('mongoose') //imported the mongoose here 
const bookSchema = new mongoose.Schema({
    BookName : String ,
    author_id : {
        type : Number ,
        required : true ,
    },
    price : Number ,
    rating : Number
})



module.exports = mongoose.model('Book1',bookSchema)
const mongoose = require('mongoose')
let authorSchema = new mongoose.Schema({
    authod_id : {
        type : Number ,
        required : true
    },
    author_name : String ,
    age: Number ,
    address : String
})

module.exports=mongoose.model('author',authorSchema)
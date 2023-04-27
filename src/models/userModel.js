const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : String , 
    lastName : String , 
    mobileNo : Number , 
    gender : String ,
    emailId : String ,
    age : Number 
}, {timestamps : true})


module.exports = mongoose.model('User',userSchema)  //always use single bracket warna error deta hai 
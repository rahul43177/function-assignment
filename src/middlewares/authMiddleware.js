const jwt = require('jsonwebtoken')

const isValid = function(req,res,next){
    const token = req.headers["rahul-token"]
    try{
    if(!token) return res.send({status: false, error:"access token is not present"})
    decodedToken = jwt.verify(token, "secret-code-rahul")
    
    if(!decodedToken) return res.send({status: false , error : "token is invalid"})

    next()

}catch(e){res.send({error : `token is invalid huhu`})}}

module.exports.isValid = isValid
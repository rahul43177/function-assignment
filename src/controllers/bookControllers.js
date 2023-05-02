const booksModel = require("../models/booksModel");
const authorsModel = require("../models/authorsModel");


const createBooks = async function(req,res) {
    const data = req.body;
    const books = await booksModel.create(data);
    res.send({data : books});
};

const getBooks = async function(req,res) {
    const data = req.query;
    const allBooks = await booksModel.find(data);
    res.send({data : allBooks});
};

const chetanBhagatBooksIds = async function(req,res){
    const data = req.query;
    const hisBooksIds = await authorsModel.findOne({authorName:"Chetan Bhagat"}).select({author_id:1, _id:0});
    res.send({data : hisBooksIds});
};

const getChetansBooks = async function(req,res){
    const data = req.query;
    const chetanBooks = await booksModel.find({author_id:1});
    res.send({data : chetanBooks});
};

const updatePrice = async function(req,res){
    const data = req.query;
    const updateBook = await booksModel.findOneAndUpdate({bookName:"2 States"},{author_id:1},{price:100},{new:true, upsert:true});
    const author = await authorsModel.findOne({author_id: updateBook.author_id});
    res.send({authorName : author.authorName  ,updatedPrice : updateBook.price})
};


const findBook= async function (req, res) {
  
    let author= await booksModel.find({  price : {$gte: 50, $lte: 100}   });
    let authorsId=author.map(x=>x.author_id)
    let result= await authorsModel.find({author_id:authorsId}).select({authorName:1,_id:0});
    res.send(result);
  }


module.exports.createBooks = createBooks;
module.exports.getBooks = getBooks;
module.exports.chetanBhagatBooksIds = chetanBhagatBooksIds;
module.exports.getChetansBooks = getChetansBooks;
module.exports.updatePrice = updatePrice;
module.exports.findBook = findBook;
const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");

let createAuthor = async function (req, res) {
  let data = req.body;
  let authorDetails = await authorModel.create(data);
  res.send({ data: authorDetails });
};

let getAuthors = async function (req, res) {
  let allAuthors = await authorModel.find();
  res.send({ data: allAuthors });
};

let listing = async function (req, res) {
  let user = await authorModel.findOne({ author_name: "Chetan Bhagat" });
  let book = await bookModel
    .find({ author_id: user.author_id })
    .select({ author_id: 1, name: 1, _id: 0 });
  res.send({ msg: books });
};

let twostates = async function (req, res) {
  let thebook = await bookModel.findOneAndUpdate(
    { name: "Two states" },
    { price: 100 },
    { new: true }
  );
  let theauthor = await authorModel
    .findOne({ author_id: thebook.author_id })
    .select({ author_name: 1, _id: 0 });
  res.send({ author: theauthor, price: thebook.price });
};

let bookBtw50And100 = async function(req,res) {
    let book = await bookModel.find({ price: {$gte :50 , $lte :100 }}).select({author_id : 1 , _id:0})
    let data = await Promise.all(
        data.map(async(el)=>{
            return await authorModel.find(el).select({author_name:1 , _id:0})
        })
    )
    res.send({data : data})
}

module.exports.createAuthor = createAuthor;
module.exports.getAuthors = getAuthors;
module.exports.listing = listing;
module.exports.twostates = twostates;

const express = require('express');
const lodash = require('lodash')
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
const firstTask = require('../logger/logger')
const secondTask = require('../util/helper')
const  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const odd = [1,3,5,7,9,11,13,15,17,19] 
const formatting = require('../validator/formatter')
let pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]





router.get('/test-me', function (req, res) {
    firstTask.nameAndBatch()
    secondTask.date()
    // secondTask.month()
    secondTask.month()
    secondTask.batch()
   
   
    let x = lodash.chunk(months,3)
    console.log(x)
    let y = lodash.tail(odd) //retrieves all the element from an array except the first one 
    console.log(y)

    let z = lodash.union([23,43,23,44],[43,65,75,45],[45,22,12,23],[75,57,98,22],[78,98,45,33])
    console.log(z)

    formatting.upperCase()
    formatting.lowerCase()
    formatting.trim()

    console.log(lodash.fromPairs(pairs))
    res.send('This should be working!')
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});

router.get('/cohorts', function(req , res) {
    res.send(['technetium','nobelium'])
})

router.get('/students',function(req,res){
    // here we write logic to write the logic of getting good students and then we will send this data to the web page via response (res)
    res.send(['Rahul','Pal','Ravi'])
})

router.get('/student/:studentName',function(req,res){
    console.log(studentName)
})

module.exports = router;

router.get('/pal',function(req,res){
    res.send("Pal Bijewar")
})


router.get('/movies', function (req, res) {

    res.send(movies)
})

router.get('/movies/:indexNumber', function (req, res) {
    let index = req.params.indexNumber
    // res.send = movies[index]  ====> problem 2 
    // problem 3 
    if (index < 0 || index > movies.length) {
        res.send("Invalid Request")
    }
    else {
        res.send(movies[index])
    }
})
router.get('/films', function (req, res) {
    let movies_obj = [
        {
            id: 1,
            name: "The Shining",
        },
        {
            id: 2,
            name: "Incendies",
        },
        {
            id: 3,
            name: "Rang de Basanti",
        },
        {
            id: 4,
            name: "Finding Nemo",
        },
    ];
    res.send(movies_obj)
})

router.get('/films/:filmId',function(req,res){
    let movies_obj = [
        {
            id: 1,
            name: "The Shining",
        },
        {
            id: 2,
            name: "Incendies",
        },
        {
            id: 3,
            name: "Rang de Basanti",
        },
        {
            id: 4,
            name: "Finding Nemo",
        },
    ];
    
    let idx = req.params.filmId
    let film = movies_obj.find((element)=> element.id == idx)
    res.send(film)
    
})
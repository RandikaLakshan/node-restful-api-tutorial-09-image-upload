const express = require('express');
const booksRoutes = express.Router();

// Require books model in our routes module

let Books = require('../models/books.model')


// Add Authors

booksRoutes.route('/addbooks').post(function (req, res) {
    let books = new Books(req.body);
    books.save()
        .then( authors => {
            res.status(200).json(authors);
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

booksRoutes.get('/getbooks/:name',function (req,  res) {
    // let sstation1= req.params.sstation;

   Books.find({author:req.params.name}, function (err, Books){
       console.log( res.json(Books));
    });
});



module.exports =booksRoutes ;
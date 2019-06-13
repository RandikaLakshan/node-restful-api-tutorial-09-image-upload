const mongoose = require('mongoose');
const Schema2 = mongoose.Schema;

// Define collection and schema for books
let Books = new Schema2({

    isbn: {
        type: String
    },

    name: {
        type: String
    },

    author:{

        type:String
    }

}, {
    collection: 'Books'
});

module.exports = mongoose.model('Books', Books);
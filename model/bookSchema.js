const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    "title": {
        type: String,
        required: true
    },

    "shortDescription" : {
        type: String

    },

    "longDescription" : {
        type: String
    },

    "year": {
        type: Number,
        max: [2023, 'year must be less than or equal to 2023']
    },

    "isbn": {
        type: String,
        unique: [true, 'book isbn aready exist'],
        required: true
    },

    "price": {
        type: Number,
        required : true,
        min : [0, 'Price must be greater than 0']
    },

    "createdAt": {
        type: Date,
        default: Date.now()
    },

    "updatedAt": {
        type: Date,
        default: Date.now()
    }

})

const book = mongoose.model('books', BookSchema)
module.exports = book
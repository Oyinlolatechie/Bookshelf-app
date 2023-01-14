const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
    "firstname":{
        type: String,
        required: true,
        trim: true
    },

    "lastname": {
        type: String,
        required: true,
        trim: true
    },

    "dob": {
        type: Number,
        required: true
    },

    "country": {
        type: String
    },

    "books": {
        type: Array
    },

    "createdAt": {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('authors', authorSchema)
 
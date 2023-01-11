const mongoose = require('mongoose')
const CONFIG = require('../config/config')

const MONGODB_URI = CONFIG.MONGODB_URI

mongoose.set('strictQuery', true);
const connectDb = () => {
    mongoose.connect(MONGODB_URI)

    mongoose.connection.on('connected', ()=>{
        console.log('MongoDb connected successfully')
    })

    mongoose.connection.on("error", (error)=>{
        console.log('An error occured while connecting to database', error)
    })
}

module.exports = connectDb
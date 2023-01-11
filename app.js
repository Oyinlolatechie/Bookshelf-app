const express = require('express');
const CONFIG = require('./config/config');

const connectDb = require('./db/dbConfig')
const errorMiddleware = require('./middlewares/errorHandler')
const bookValidateMiddleware = require ('./middlewares/bookValidator')

const app = express();


//body parser middleare
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(bookValidateMiddleware)

//connecte Database
connectDb();

app.get('/', (req, res)=>{
    res.send("Hello buddy !")
});

app.use(errorMiddleware)

app.listen(CONFIG.PORT, ()=>{
    console.log(`server started on: http://localhost:${CONFIG.PORT}`)
});
const express = require('express');
const CONFIG = require('./config/config');


const bookRouter = require('./routes/bookRouter')
const authorRouter = require('./routes/authorRouter')
const{ auth }= require('express-openid-connect')
const authConfig = require('./auth/auth2.0')


const connectDb = require('./db/dbConfig')
const errorMiddleware = require('./middlewares/errorHandler')


const app = express()


//body parser middleare
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//connecte Database
connectDb();

//auth 
app.use(auth(authConfig));

//set routes
app.use('/api/v1', bookRouter)
app.use('/api/v1', authorRouter)


app.get('/', (req, res)=>{
    res.send("Hello buddy !")
});

app.use(errorMiddleware)

app.listen(CONFIG.PORT, ()=>{
    console.log(`server started on: http://localhost:${CONFIG.PORT}`)
});
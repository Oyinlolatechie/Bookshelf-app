const express = require('express');
const CONFIG = require('./config/config');

const bookRouter = require('./routes/bookRouter')

const connectDb = require('./db/dbConfig')
const errorMiddleware = require('./middlewares/errorHandler')


const app = express();


//body parser middleare
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//connecte Database
connectDb();




//set routes
app.use('/api/v1', bookRouter)


app.get('/', (req, res)=>{
    res.send("Hello buddy !")
});

app.listen(CONFIG.PORT, ()=>{
    console.log(`server started on: http://localhost:${CONFIG.PORT}`)
});
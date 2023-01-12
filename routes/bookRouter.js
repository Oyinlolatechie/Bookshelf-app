const express = require('express');
const bookRouter = express.Router();

const bookValidateMiddleware = require ('../middlewares/bookValidator')
const { createBook, getAllBooks, getBookById } = require('../controller/bookController')

bookRouter.get('/', getAllBooks)

bookRouter.get('/:id', getBookById)

bookRouter.post('/', bookValidateMiddleware, createBook )

bookRouter.put('/', )

bookRouter.delete('/', )

module.exports = bookRouter
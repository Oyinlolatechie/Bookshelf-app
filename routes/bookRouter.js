const express = require('express');
const bookRouter = express.Router();

const {bookValidateMiddleware, updateBookMiddleware} = require ('../middlewares/bookValidator')
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controller/bookController')

bookRouter.get('/', getAllBooks)

bookRouter.get('/:id', getBookById)

bookRouter.post('/', bookValidateMiddleware, createBook )

bookRouter.patch('/:id',updateBookMiddleware, updateBook)

bookRouter.delete('/:id', deleteBook)

module.exports = bookRouter
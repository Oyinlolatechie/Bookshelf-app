const express = require('express');
const bookRouter = express.Router();

const bookValidateMiddleware = require ('../middlewares/bookValidator')
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require('../controller/bookController')

bookRouter.get('/', getAllBooks)

bookRouter.get('/:id', getBookById)

bookRouter.post('/', bookValidateMiddleware, createBook )

bookRouter.patch('/:id', updateBook)

bookRouter.delete('/:id', deleteBook)

module.exports = bookRouter
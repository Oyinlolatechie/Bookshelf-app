const express = require('express');
const authorRouter = express.Router();

const {authorValidateMiddleware, updateAuthorMiddleware} = require ('../middlewares/authorValidator')
const { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor, } = require('../controller/authorController')

authorRouter.get('/', getAllAuthors)

authorRouter.get('/:id', getAuthorById)

authorRouter.post('/', authorValidateMiddleware, createAuthor )

authorRouter.patch('/:id',updateAuthorMiddleware, updateAuthor)

authorRouter.delete('/:id',deleteAuthor)

module.exports = authorRouter
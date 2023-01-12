const joi = require('joi');
const BookModel = require('../model/bookSchema')



const bookValidator = joi.object({
    title: joi.string()
        .required()
        .min(5)
        .max(150)
        .trim(),

    shortDescription: joi.string()
        .min(5)
        .max(255)
        .trim(),

    longDescription: joi.string()
        .min(10)
        .max(450)
        .trim(),

    year: joi.number()
        .max(2023),

    isbn: joi.string()
        // .unique()
        .required()
        .trim(),

    price: joi.number()
        .min(0)
        .required(),

    createdAt: joi.date()
        .default(() => Date.now()),

    updatedAt: joi.date()
        .default(() => Date.now())
})


const isbnUniquenessCheck = async (isbn) => {
    const existingBook = await BookModel.findOne({ isbn });
    if (existingBook) {
        throw new Error('The ISBN is already in use');
    }
}



const bookValidateMiddleware = async (req, res, next) => {
    const bookPlayload = req.body

    try {
        await isbnUniquenessCheck(bookPlayload.isbn);
        await bookValidator.validateAsync(bookPlayload);
        next()
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

module.exports = bookValidateMiddleware
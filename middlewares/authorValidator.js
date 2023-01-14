const joi = require('joi');



const authorValidator = joi.object({
    firstname: joi.string()
        .required()
        .min(5)
        .max(150)
        .trim(),

    lastname: joi.string()
        .required()
        .min(5)
        .max(255)
        .trim(),

    dob: joi.number()
        .required()
        .min(1900)
        .max(2023),

    country: joi.string(),

    books: joi.array()
        .items(joi.string()),

    createdAt: joi.date()
        .default(() => Date.now()),

    updatedAt: joi.date()
        .default(() => Date.now())
})


const updateAuthorValidator = joi.object({
    firstname: joi.string()
        .min(5)
        .max(150)
        .trim(),

    lastname: joi.string()
        .min(5)
        .max(255)
        .trim(),

    dob: joi.number()
        .min(1900)
        .max(2023),

    country: joi.string(),

    books: joi.array()
        .items(joi.string()),

    createdAt: joi.date()
        .default(() => Date.now()),

    updatedAt: joi.date()
        .default(() => Date.now())
})




const authorValidateMiddleware = async (req, res, next) => {
    const authorPlayload = req.body

    try {
        await authorValidator.validateAsync(authorPlayload);
        next()
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}


const updateAuthorMiddleware = async (req, res, next) => {
    const authorPlayload = req.body

    try {
        await updateAuthorValidator.validateAsync(authorPlayload);
        next()
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
}

module.exports = {
    authorValidateMiddleware,
    updateAuthorMiddleware
}
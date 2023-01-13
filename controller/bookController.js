const BookModel = require('../model/bookSchema')

exports.createBook = async (req, res) => {
    const bookInfo = req.body

    try {
        const book = await BookModel.create(bookInfo)

        if (book) {
            res.status(200)
                .json({
                    status: "success",
                    data: book
                })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
            .json({
                status: "failed",
                message: error
            })

    }
}

exports.getAllBooks = async (req, res) => {

    try {
        const books = await BookModel.find()

        if (books) {
            res.status(200)
                .json({
                    status: "success",
                    data: books
                })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
            .json({
                status: "failed",
                message: "An error occured while trying to fecth data"
            })

    }
}

exports.getBookById = async (req, res) => {
    const bookId = req.params.id

    try {
        const book = await BookModel.findById(bookId)

        if (book) {
            res.status(200)
                .json({
                    status: "success",
                    data: book
                })
        } else {
            res.status(404)
                .json({
                    message: "Book not found"
                })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
            .json({
                status: "failed",
                message: "An error occurred while fecthing data"
            })
    }

}

exports.updateBook = async (req, res) => {
    const bookId = req.params.id
    const bookInfo = req.body

    try {
        const bookUpdated = await BookModel.findByIdAndUpdate(bookId, bookInfo,
            {
                new: true,
                runValidators: true
            })
        if (bookUpdated) {
            res.status(201)
                .json({
                    status: 'success',
                    data: bookUpdated
                })
        } else {
            res.status(400)
                .json({
                    status: 'failed',
                    message: "Book to update not found"
                })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
            .json({
                status: 'failed',
                message: 'An errror occurred while trying to update book'
            })

    }

}

exports.deleteBook = async (req, res) => {
    const bookId = req.params.id

    try {
        const deletedBook = await BookModel.findByIdAndDelete(bookId)
        if (deletedBook) {
            res.status(204)
                .json({
                    status: "success",
                    data: deletedBook
                })
        } else {
            res.status(404)
                .json({
                    status: "failed",
                    message: "Book to deleted not found"
                })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
            .json({
                status: "failed",
                message: "An error occurred while trying to delete book"
            })
    }
}
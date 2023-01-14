const authorModel = require('../model/authorSchema')

exports.createAuthor = async (req, res) => {
    const authorInfo = req.body

    try {
        const author = await authorModel.create(authorInfo)

        if (author) {
            res.status(200)
                .json({
                    status: "success",
                    data: author
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

exports.getAllAuthors = async (req, res) => {

    try {
        const authors = await authorModel.find()

        if (authors) {
            res.status(200)
                .json({
                    status: "success",
                    data: authors
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

exports.getAuthorById = async (req, res) => {
    const authorId = req.params.id

    try {
        const author = await authorModel.findById(authorId)

        if (author) {
            res.status(200)
                .json({
                    status: "success",
                    data: author
                })
        } else {
            res.status(404)
                .json({
                    message: "author not found"
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

exports.updateAuthor = async (req, res) => {
    const authorId = req.params.id
    const authorInfo = req.body

    try {
        const authorUpdated = await authorModel.findByIdAndUpdate(authorId, authorInfo,
            {
                new: true,
                runValidators: true
            })
        if (authorUpdated) {
            res.status(201)
                .json({
                    status: 'success',
                    data: authorUpdated
                })
        } else {
            res.status(400)
                .json({
                    status: 'failed',
                    message: "author to update not found"
                })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
            .json({
                status: 'failed',
                message: 'An errror occurred while trying to update author'
            })

    }

}

exports.deleteAuthor = async (req, res) => {
    const authorId = req.params.id

    try {
        const deletedAuthor = await authorModel.findByIdAndDelete(authorId)
        if (deletedAuthor) {
            res.status(204)
                .json({
                    status: "success",
                    data: deletdAuthor
                })
        } else {
            res.status(404)
                .json({
                    status: "failed",
                    message: "author to be deleted not found"
                })
        }
    } catch (error) {
        console.log(error)
        res.status(400)
            .json({
                status: "failed",
                message: "An error occurred while trying to delete author"
            })
    }
}
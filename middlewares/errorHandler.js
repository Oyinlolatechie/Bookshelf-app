const errorHandler = (req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || "An internal server error occured"

    return res.status(statusCode).json({
        status: "failed",
        message: message,
        stack : process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = errorHandler
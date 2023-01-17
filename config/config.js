require('dotenv').config()

const config = {
    PORT : process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,

    authSecret : process.env.AUTH_SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
}

module.exports = config
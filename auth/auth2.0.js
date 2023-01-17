const CONFIG = require('../config/config')

const { auth } = require('express-openid-connect');

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: CONFIG.authSecret,
  baseURL: CONFIG.baseURL,
  clientID: CONFIG.clientID,
  issuerBaseURL: CONFIG.issuerBaseURL
};



module.exports = authConfig
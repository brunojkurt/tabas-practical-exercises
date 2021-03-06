const dotenv = require('dotenv')
dotenv.config()
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
const environment = require('./environment')

module.exports = environment.toWebpackConfig()

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.API_HOST = process.env.API_HOST
const environment = require('./environment')

module.exports = environment.toWebpackConfig()

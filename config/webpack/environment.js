const { environment } = require('@rails/webpacker')
environment.API_HOST = process.env.API_HOST
module.exports = environment

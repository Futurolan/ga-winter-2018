const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_API_URL': prod ? 'http://localhost:8080' : 'http://localhost:8080',
  'process.env.EDITION_ID': process.env.EDITION_ID|1
}

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_API_URL': prod ? process.env.BACKEND_API_URL : 'http://localhost:8080',
  'process.env.EDITION_ID': prod ? process.env.EDITION_ID : 1,
  'process.env.BASE_URL': prod ? process.env.BASE_URL : 'http://localhost:3000'
}

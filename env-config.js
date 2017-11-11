const prod = process.env.NODE_ENV === 'production'

console.log(process.env.EDITION_ID)
module.exports = {
  'process.env.BACKEND_API_URL': prod ? 'https://[BACKEND_API_URL]' : 'http://localhost:8080',
  'process.env.EDITION_ID': process.env.EDITION_ID
}

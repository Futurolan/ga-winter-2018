const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BASE_URL': prod ? 'https://[BASE_URL]' : 'http://localhost:3000',
  'process.env.BACKEND_API_URL': prod ? 'https://[BACKEND_API_URL]/api/v1' : 'http://localhost:4000/api/v1'
}

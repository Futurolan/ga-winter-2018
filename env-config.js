
module.exports = {
  'process.env.BACKEND_API_URL': process.env.BACKEND_API_UR ? process.env.BACKEND_API_URL : 'http://localhost:8080',
  'process.env.EDITION_ID': process.env.EDITION_ID ? process.env.EDITION_ID : 1,
  'process.env.BASE_URL': process.env.BASE_URL ? process.env.BASE_URL : 'http://localhost:3000'
}

// inports
// -npm
const express = require('express')
const bodyParser = require('body-parser')
// -routers

// constant valus
const port = process.env.PORT || 4000
const jsonParser = bodyParser.json()

// init's
const app = express()

// routers
app.listen(port, () => console.log(`lisenign on port: ${port}`))
app.use(jsonParser)

// can the server respond
app.get('/ping', (request, response) => {
  console.log('ping pong')
  response.send('pong')
})
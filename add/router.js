const { Router } = require('express')
const Add = require('./model')

const router = new Router

router.get(
  '/adds',
  (request, response, next) => Add
    .findAll()
    .then(adds => {
      console.log('bla');
      
      response.send({ adds })
    })
    .catch(next)
)

module.exports = router
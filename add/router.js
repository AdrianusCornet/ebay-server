const { Router } = require('express')
const Add = require('./model')

const router = new Router

router.get(
  '/adds',
  (request, response, next) => Add
    .findAll()
    .then(adds => {
      response.send({ adds })
    })
    .catch(next)
)
router.get(
  '/adds/list',
  (request, response, next) => Add
    .findAll({
      attributes: ['id', 'title', 'prise']
    })
    .then(adds => {
      response.send({ adds })
    })
    .catch(next)
)
router.post(
  '/adds',
  (request, response, next) => Add
    .creat(request.body)
    .then(add => response.status(201).send({add}))
    .catch(next)
)

module.exports = router
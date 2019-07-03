const { Router } = require('express')
const Add = require('./model')

const router = new Router

// get all
router.get(
  '/adds',
  (request, response, next) => Add
    .findAll()
    .then(adds => {
      response.send({ adds })
    })
    .catch(next)
)
// get list data
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
// get by id
router.get(
  '/adds/:id',
  (request, response, next) => Add
    .findByPk(request.params.id)
    .then(add => response.send({ add }))
    .then(next)
)
// post
router.post(
  '/adds',
  (request, response, next) => Add
    .creat(request.body)
    .then(add => response.status(201).send({add}))
    .catch(next)
)
// put
router.put(
  '/adds/:id',
  (request, response, next) => Add
    .findByPk(request.params.id)
    .then(add => add.update(request.body))
    .then(updatedAdd => response.send({ updatedAdd }))
    .catch(next)
)

module.exports = router
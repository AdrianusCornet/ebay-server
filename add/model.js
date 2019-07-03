const Sequelize = require('sequelize')
const db = require('../db')

const Add = db.define(
  'add',
  {
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    discription: {
      type: Sequelize.STRING,
      field: 'discr'
    },
    pictureUrl: {
      type: Sequelize.STRING,
      field: 'p_url'
    },
    prise: {
      type: Sequelize.NUMBER
    },
    emailAdres: {
      type: Sequelize.STRING,
      field: 'e_mail'
    },
    phoneNumber: {
      type: Sequelize.STRING,
      field: 'phone'
    }
  },
  { tableName: 'add_table' }
)
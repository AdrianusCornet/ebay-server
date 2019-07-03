const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgresql://postgres:ebay@localhost:5432/postgres'

const sequelize = new Sequelize(databaseUrl)

sequelize
  .sync()
  .then(() => console.log('Database schema updated'))
  .catch(console.error)

module.exports = sequelize
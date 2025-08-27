const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('crud_db', 'natalia', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize

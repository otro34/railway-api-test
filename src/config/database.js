import Sequelize from 'sequelize'

const hostname = process.env.HOSTNAME || '127.0.0.1'
const username = process.env.USERNAME || 'postgres'
const password = process.env.PASSWORD || '123'
const database = process.env.DATABASE || 'postgres'
const dialect = process.env.DIALECT || 'postgres'
const port = process.env.DBPORT || 5433

const sequelize = new Sequelize(database,username,password, {
    host: hostname,
    port,
    dialect: dialect,
    operatorAliases: false,
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
})

export default sequelize
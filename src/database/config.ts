import { Sequelize } from 'sequelize-typescript'
require('dotenv-safe/config.js')
import { Donor } from '../models/Donor.model'


const sequelize = new Sequelize({
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  database: 'd9nkptqi931r7',
  dialect: 'postgres',
  username: 'prryztyjccwrws',
  password: 'af1c58bb0cdb36c4923956be539f576724e7c89f5e0a3cacd9ab57efb7cb8f1e',
  host: 'ec2-3-211-6-217.compute-1.amazonaws.com'
})

sequelize.addModels([Donor])

async function connect() {
  try {
    await sequelize.authenticate()
    console.log('Conectou com o Banco de Dados')
  } catch (error) {
    console.log(`Erro ao conectar com o Banco de dados, ${error}`)
  }
}

connect()

module.exports = sequelize

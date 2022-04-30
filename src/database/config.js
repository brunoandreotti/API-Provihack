const { Sequelize } = require('sequelize')
require('dotenv-safe/config.js');

const sequelize = new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

async function connect() {
  try {
    await sequelize.authenticate()
    console.log('Conectou com o Banco de Dados')
  } catch (error) {
    console.log(`Erro ao conectar com o Banco de dados, ${error}`)
  }
}

connect()

module.exports = sequelize;

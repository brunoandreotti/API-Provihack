import express from 'express'
require('dotenv-safe').config({
  allowEmptyValues: true
})
//Conexão com o banco
const sequelize = require('./database/config.js')

const app = express()
const PORT = process.env.PORT

app.use(express.json())

//Sincronização com o banco
async function sync() {
  try {
    await sequelize.sync()

    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  } catch (error) {
    console.log(`Houve um erro ao sincronizar com o banco: ${error}`)
  }
}

sync()

require('dotenv-safe').config({
  allowEmptyValues: true
})
import express from 'express'


//Conexão com o banco
const sequelize = require('./database/config')

//Routers
import donoRouter from './routes/Donor.routes'

const app = express()
const PORT = process.env.PORT

app.use(express.json())

//Rotas
app.use('/donor', donoRouter)

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

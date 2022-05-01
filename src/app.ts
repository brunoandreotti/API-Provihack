require("dotenv-safe").config({
  allowEmptyValues: true,
});
import express from "express";
import cors from "cors"

//Conexão com o banco
const sequelize = require("./database/config");

//Routers
import donorRouter from "./routes/Donor.routes";
import doneeRouter from "./routes/Donee.routes";
import productRouter from "./routes/Product.routes"

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

//Rotas
app.get("/", (req, res) => {
  res.json({message: "API PROVIHACK EQUIPE 4 - "})
})
app.use("/donor", donorRouter);
app.use("/donee", doneeRouter);
app.use("/product", productRouter)

//Sincronização com o banco
async function sync() {
  try {
    await sequelize.sync({});

    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.log(`Houve um erro ao sincronizar com o banco: ${error}`);
  }
}

sync();

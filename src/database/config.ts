import { Sequelize } from "sequelize-typescript";

import { Donor } from "../models/Donor.model";
import { Donee } from "../models/Donee.model";
import { Product } from "../models/Product.model";

const sequelize = new Sequelize({
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  database: "d858vp3d1ql4j6",
  dialect: "postgres",
  username: "bqiwajmkvfuvzr",
  password: "2ca4c7ec0e436d2fbdade995d55832b90932dc4644c63973836c141499161d1a",
  host: "ec2-54-80-122-11.compute-1.amazonaws.com",
});

sequelize.addModels([Donor, Donee, Product]);


async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Conectou com o Banco de Dados");
  } catch (error) {
    console.log(`Erro ao conectar com o Banco de dados, ${error}`);
  }
}

connect();

module.exports = sequelize;

import express from "express";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import { CreateProductController } from "../controllers/Product/createProductController";
import { FindAllProductsController } from "../controllers/Product/findAllProductsController"

const router = express.Router()


//Rotas

router.post("/create", ensureAuthenticated, CreateProductController.create)
router.get("/", FindAllProductsController.find)

export default router
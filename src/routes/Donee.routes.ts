import express from "express";
import { CreateDoneeController } from "../controllers/Donee/createDoneeController";
import { LoginDoneeController } from "../controllers/Donee/loginDoneeController";
import { FindDoneeByIdController } from "../controllers/Donee/getDoneeByIdCrontroller";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const router = express.Router();

router.post("/create", CreateDoneeController.create);
router.post("/login", LoginDoneeController.login);
router.get("/info", ensureAuthenticated, FindDoneeByIdController.find);

export default router;

import express from "express";
import { CreateDonorController } from "../controllers/Donor/createDonorController";
import { LoginDonorController } from "../controllers/Donor/loginDonorController";
import { FindDonorByIdController } from "../controllers/Donor/getDonorByIdController";

//Middlewares
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const router = express.Router();

router.post("/create", CreateDonorController.create);
router.post("/login", LoginDonorController.login);
router.get("/info", ensureAuthenticated, FindDonorByIdController.find);

export default router;

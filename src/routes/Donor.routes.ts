import express from "express";
import { CreateDonorController } from "../controllers/Donor/createDonorController";


const router = express.Router();



router.post("/create", CreateDonorController.create)

export default router
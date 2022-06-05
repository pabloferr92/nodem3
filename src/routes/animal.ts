import express from "express";
import { Request, Response } from "express";
import AnimalController from "../controllers/animal_controller";

const router = express.Router();

router.get("/", AnimalController.listAll);

router.post("/", AnimalController.createAnimal);

router.put("/:id", AnimalController.updateAnimal);

router.delete("/:id", AnimalController.deleteAnimal);

router.get("/:id", AnimalController.retrieveAnimal);

export default router;

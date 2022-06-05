import express from "express";
import { Request, Response } from "express";
import ProprietarioController from "../controllers/proprietario_controller";

const router = express.Router();

router.get("/", ProprietarioController.listAll);

router.post("/", ProprietarioController.createProprietario);

router.put("/:id", ProprietarioController.updateProprietario);

router.delete("/:id", ProprietarioController.deleteProprietario);

router.get("/:id", ProprietarioController.retrieveProprietario);

export default router;

import express from "express";
import { Request, Response } from "express";
import ServicosController from "../controllers/servico_controller";

const router = express.Router();

router.get("/", ServicosController.listAll);

router.post("/", ServicosController.create);

router.put("/:id", ServicosController.update);

router.delete("/:id", ServicosController.deleteByPk);

router.get("/:id", ServicosController.retrieve);

export default router;

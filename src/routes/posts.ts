import express from "express";
import PostController from "../controllers/post_controller";

const router = express.Router();

router.get("/", PostController.listAll);

router.post("/", PostController.create);

router.put("/:id", PostController.update);

router.delete("/:id", PostController.deleteByPk);

router.get("/:id", PostController.retrieve);

router.post("/comentario", PostController.addComentario);

export default router;

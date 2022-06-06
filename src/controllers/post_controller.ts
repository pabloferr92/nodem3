import { NextFunction, Request, Response } from "express";
import PostService from "../services/post_service";

async function create(req: Request, res: Response, next: NextFunction) {
  const prop = await PostService.create(req.body);
  res.send(prop);
}

async function retrieve(req: Request, res: Response, next: NextFunction) {
  res.json(await PostService.retrieve(req.params.id));
}

async function listAll(req: Request, res: Response, next: NextFunction) {
  res.json(await PostService.listAll());
}

async function update(req: Request, res: Response, next: NextFunction) {
  res.json(await PostService.update(req.body, req.params.id));
}

async function deleteByPk(req: Request, res: Response, next: NextFunction) {
  console.log("executando delete");
  await PostService.deleteByPk(parseInt(req.params.id));
  res.json("Proprietario excluido");
}

async function addComentario(req: Request, res: Response, next: NextFunction) {
  res.json(await PostService.addComentario(req.body));
}

export default {
  create,
  retrieve,
  listAll,
  update,
  deleteByPk,
  addComentario,
};

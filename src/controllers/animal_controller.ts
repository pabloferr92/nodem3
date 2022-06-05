import { NextFunction, Request, Response } from "express";
import AnimalService from "../services/animais_service";

async function createAnimal(req: Request, res: Response, next: NextFunction) {
  const prop = await AnimalService.createAnimal(req.body);
  console.log("controller create proprietario " + prop);
  res.send(prop);
}

async function retrieveAnimal(req: Request, res: Response, next: NextFunction) {
  console.log("Executando get");
  res.json(await AnimalService.retrieveAnimal(parseInt(req.params.id)));
}

async function listAll(req: Request, res: Response, next: NextFunction) {
  const prop = await AnimalService.listAll();
  console.log("lista de todos " + prop);
  res.json(prop);
}

async function updateAnimal(req: Request, res: Response, next: NextFunction) {
  res.json(await AnimalService.updateAnimal(req.body, parseInt(req.params.id)));
}

async function deleteAnimal(req: Request, res: Response, next: NextFunction) {
  console.log("executando delete");
  await AnimalService.deleteAnimal(parseInt(req.params.id));
  res.json("Proprietario excluido");
}

export default {
  createAnimal,
  retrieveAnimal,
  listAll,
  updateAnimal,
  deleteAnimal,
};

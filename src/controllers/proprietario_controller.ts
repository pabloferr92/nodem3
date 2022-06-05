import { NextFunction, Request, Response } from "express";
import ProprietarioService from "../services/client_service";

async function createProprietario(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const prop = await ProprietarioService.createProprietario(req.body);
  console.log("controller create proprietario " + prop);
  res.send(prop);
}

async function retrieveProprietario(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("Executando get");
  res.json(
    await ProprietarioService.retrieveProprietario(parseInt(req.params.id))
  );
}

async function listAll(req: Request, res: Response, next: NextFunction) {
  const prop = await ProprietarioService.listAll();
  console.log("lista de todos " + prop);
  res.json(prop);
}

async function updateProprietario(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.json(
    await ProprietarioService.updateProprietario(
      req.body,
      parseInt(req.params.id)
    )
  );
}

async function deleteProprietario(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("executando delete");
  await ProprietarioService.deleteProprietario(parseInt(req.params.id));
  res.json("Proprietario excluido");
}

export default {
  createProprietario,
  retrieveProprietario,
  listAll,
  updateProprietario,
  deleteProprietario,
};

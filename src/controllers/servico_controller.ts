import { NextFunction, Request, Response } from "express";
import ServicoService from "../services/servicos_services";

async function create(req: Request, res: Response, next: NextFunction) {
  const prop = await ServicoService.create(req.body);
  res.send(prop);
}

async function retrieve(req: Request, res: Response, next: NextFunction) {
  res.json(await ServicoService.retrieve(parseInt(req.params.id)));
}

async function listAll(req: Request, res: Response, next: NextFunction) {
  if (!req.query.proprietario) {
    // lista todos servicos de todos proprietarios
    const servicos = await ServicoService.listAll();
    res.json(servicos);
  } else {
    // lista servicos dado o proprietario
    const servicos = await ServicoService.listByProprietario(
      req.query.proprietario
    );
    res.json(servicos);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  res.json(await ServicoService.update(req.body, parseInt(req.params.id)));
}

async function deleteByPk(req: Request, res: Response, next: NextFunction) {
  await ServicoService.deleteByPk(parseInt(req.params.id));
  res.json("Servico excluido");
}

export default {
  create,
  retrieve,
  listAll,
  update,
  deleteByPk,
};

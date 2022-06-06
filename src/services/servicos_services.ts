import ServicoeRep from "../repositories/servicos";

async function create(servico: any) {
  return await ServicoeRep.create(servico);
}

async function retrieve(id: number) {
  const servico = ServicoeRep.retrieve(id);
  return servico;
}

async function listAll() {
  try {
    const servico = await ServicoeRep.listAll();
    return servico;
  } catch (err) {
    throw new Error("falha ao lista todos");
  }
}

async function update(servico: any, id: any) {
  try {
    const updated = await ServicoeRep.update(servico, id);
    console.log("Executando atualização " + servico.descricao);
    return retrieve(id);
  } catch (err) {
    throw new Error("falha ao lista todos");
  }
}

async function deleteByPk(id: any) {
  try {
    await ServicoeRep.deleteByPk(id);
  } catch (err) {
    throw err;
  }
}

async function listByProprietario(id: any) {
  try {
    return ServicoeRep.listByProprietario(id);
  } catch (error) {
    throw error;
  }
}

export default {
  create,
  retrieve,
  listAll,
  update,
  deleteByPk,
  listByProprietario,
};

import ProprietarioRep from "../repositories/proprietarios";

async function createProprietario(proprietario: any) {
  return await ProprietarioRep.createProprietario(proprietario);
}

async function retrieveProprietario(id: number) {
  const prop = ProprietarioRep.retrieveProprietario(id);
  return prop;
}

async function listAll() {
  try {
    const prop = await ProprietarioRep.listAll();
    return prop;
  } catch (err) {
    throw new Error("falha ao lista todos");
  }
}

async function updateProprietario(proprietario: any, id: any) {
  try {
    const prop = await ProprietarioRep.updateProprietario(proprietario, id);
    return prop;
  } catch (err) {
    throw new Error("falha ao lista todos");
  }
}

async function deleteProprietario(id: any) {
  try {
    await ProprietarioRep.deleteProprietario(id);
  } catch (err) {
    throw err;
  }
}
export default {
  createProprietario,
  retrieveProprietario,
  listAll,
  updateProprietario,
  deleteProprietario,
};

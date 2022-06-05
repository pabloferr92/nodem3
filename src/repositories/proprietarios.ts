import Proprietarios from "../models/proprietarios";

async function createProprietario(proprietario: any) {
  try {
    const prop = await Proprietarios.create(proprietario);
    return prop;
  } catch (error) {
    throw error;
  }
}

async function retrieveProprietario(id: number) {
  try {
    const prop = await Proprietarios.findByPk(id);
    return prop;
  } catch (error) {
    throw error;
  }
}

async function listAll() {
  try {
    const prop = await Proprietarios.findAll();
    return prop;
  } catch (error) {
    throw error;
  }
}

async function updateProprietario(proprietario: any, id: any) {
  try {
    Proprietarios.update(proprietario, {
      where: {
        proprietario_id: id,
      },
    });
    console.log(
      "proprietario atualizado " + (await Proprietarios.findByPk(id))
    );
    return await Proprietarios.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function deleteProprietario(id: any) {
  try {
    await Proprietarios.destroy({
      where: {
        proprietario_id: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createProprietario,
  retrieveProprietario,
  listAll,
  updateProprietario,
  deleteProprietario,
};

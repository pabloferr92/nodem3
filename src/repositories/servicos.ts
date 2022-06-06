import Animais from "../models/animais";
import Servicos from "../models/servicos";

async function create(animal: any) {
  try {
    const servico = await Servicos.create(animal);
    return servico;
  } catch (error) {
    throw error;
  }
}

async function retrieve(id: number) {
  try {
    const servico = await Servicos.findByPk(id);
    return servico;
  } catch (error) {
    throw error;
  }
}

async function listAll() {
  try {
    const servico = await Servicos.findAll();
    return servico;
  } catch (error) {
    throw error;
  }
}

async function update(servico: any, id: any) {
  try {
    Servicos.update(servico, {
      where: {
        servico_id: id,
      },
    });
    return await Servicos.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function deleteByPk(id: any) {
  try {
    await Servicos.destroy({
      where: {
        animal_id: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function listByProprietario(id: any) {
  try {
    return await Servicos.findAll({
      include: {
        model: Animais,
        where: {
          proprietario_id: parseInt(id),
        },
      },
    });
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

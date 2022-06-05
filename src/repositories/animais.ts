import Animais from "../models/animais";

async function createAnimal(animal: any) {
  try {
    const prop = await Animais.create(animal);
    return prop;
  } catch (error) {
    throw error;
  }
}

async function retrieveAnimal(id: number) {
  try {
    const prop = await Animais.findByPk(id);
    return prop;
  } catch (error) {
    throw error;
  }
}

async function listAll() {
  try {
    const prop = await Animais.findAll();
    return prop;
  } catch (error) {
    throw error;
  }
}

async function updateAnimal(animal: any, id: any) {
  try {
    Animais.update(animal, {
      where: {
        animal_id: id,
      },
    });
    return await Animais.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function deleteAnimal(id: any) {
  try {
    await Animais.destroy({
      where: {
        animal_id: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createAnimal,
  retrieveAnimal,
  listAll,
  updateAnimal,
  deleteAnimal,
};

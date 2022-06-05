import AnimalRep from "../repositories/animais";

async function createAnimal(proprietario: any) {
  return await AnimalRep.createAnimal(proprietario);
}

async function retrieveAnimal(id: number) {
  const prop = AnimalRep.retrieveAnimal(id);
  return prop;
}

async function listAll() {
  try {
    const prop = await AnimalRep.listAll();
    return prop;
  } catch (err) {
    throw new Error("falha ao lista todos");
  }
}

async function updateAnimal(proprietario: any, id: any) {
  try {
    const prop = await AnimalRep.updateAnimal(proprietario, id);
    return prop;
  } catch (err) {
    throw new Error("falha ao lista todos");
  }
}

async function deleteAnimal(id: any) {
  try {
    await AnimalRep.deleteAnimal(id);
  } catch (err) {
    throw err;
  }
}
export default {
  createAnimal,
  retrieveAnimal,
  listAll,
  updateAnimal,
  deleteAnimal,
};

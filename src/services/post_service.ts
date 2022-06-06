import PostRep from "../repositories/post_mongo";

async function create(post: any) {
  return await PostRep.createPost(post);
}

async function retrieve(id: any) {
  const prop = PostRep.retrieve(id);
  return prop;
}

async function listAll() {
  try {
    return await PostRep.listAll();
  } catch (err) {
    throw new Error("falha ao lista todos");
  }
}

async function update(post: any, id: any) {
  try {
    const prop = await PostRep.update(post, id);
    return prop;
  } catch (err) {
    throw new Error("falha ao lista todos");
  }
}

async function deleteByPk(id: any) {
  try {
    await PostRep.deleteByPk();
  } catch (err) {
    throw err;
  }
}

async function addComentario(comentario: any) {
  try {
    await PostRep.addComentario(comentario);
  } catch (err) {
    throw err;
  }
}

export default {
  create,
  retrieve,
  listAll,
  update,
  deleteByPk,
  addComentario,
};

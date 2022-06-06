import PostSchema from "../scehmas/posts_schema";
import connect from "./mongo_db";

async function createPost(post: any) {
  const mongoose = await connect();

  console.log("Posts " + JSON.stringify(post));

  const Post = mongoose.model("posts", PostSchema);

  const postSchema = new Post(post);

  return await postSchema.save();
}

async function update(post: any, id: any) {
  const mongoose = await connect();

  const Post = mongoose.model("posts", PostSchema);

  await Post.findOneAndUpdate(
    {
      _id: id,
    },
    post
  );

  return await retrieve(id);
}

async function deleteByPk() {}

async function retrieve(id: any) {
  const mongoose = await connect();
  const Post = mongoose.model("posts", PostSchema);

  console.log("repository " + id);

  return await Post.findOne({
    _id: id,
  }).exec();
}

async function listAll() {
  const mongoose = await connect();
  const Post = mongoose.model("posts", PostSchema);
  return await Post.find().exec();
}

async function addComentario(comentario: any) {
  console.log("comentario no rep " + JSON.stringify(comentario));

  const mongoose = await connect();
  const Post = mongoose.model("posts", PostSchema);

  const postToComment = await retrieve(comentario.post_id);

  console.log("post to comment " + JSON.stringify(postToComment));

  postToComment.comentarios.push(comentario);

  postToComment.save();

  return postToComment;
}

export default {
  createPost,
  update,
  deleteByPk,
  retrieve,
  listAll,
  addComentario,
};

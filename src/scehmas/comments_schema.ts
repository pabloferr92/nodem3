import mongoose from "mongoose";

const CommentsSchema = new mongoose.Schema(
  {
    // commentId: Number,
    nome: String,
    conteudo: String,
  },
  {
    collection: "posts",
  }
);

export default CommentsSchema;

import mongoose from "mongoose";
import CommentsSchema from "./comments_schema";

const PostSchema = new mongoose.Schema(
  {
    // postId: Number,
    titulo: String,
    comentarios: [CommentsSchema],
  },
  {
    collection: "posts",
  }
);

export default PostSchema;

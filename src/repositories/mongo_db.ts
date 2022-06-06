import mongoose from "mongoose";

async function connect() {
  const uri =
    "mongodb+srv://mongoigti:abc321@cluster0.ygmz1.mongodb.net/blog?retryWrites=true&w=majority";

  return await mongoose.connect(uri);
}

export default connect;

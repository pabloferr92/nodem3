import express from "express";
import proprietarioRouter from "./src/routes/proprietario";
import animaisRouter from "./src/routes/animal";

const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/proprietarios", proprietarioRouter);
app.use("/animais", animaisRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

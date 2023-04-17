const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config();

const user = process.env.USER;
const senha = process.env.SENHA;
const db = process.env.DATABASE;
const cloud = `mongodb+srv://${user}:${senha}@cluster0.pbawe09.mongodb.net/${db}`;

const routes = require("./routes/routes");
app.use(routes);

const port = 3002;
app.listen(port, () => console.log(`Servidor no http://localhost:${port}/`));
mongoose
  .connect(cloud)
  .then(() => console.log("Conectado ao mongo"))
  .catch((erro) => console.error(erro));

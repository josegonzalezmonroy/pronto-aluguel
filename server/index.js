const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const port = 3002;
const db = "imoveisdb";
const cloud = `mongodb+srv://usuario_teste:5QzyH5D7BAeZnwDM@cluster0.t6zgnjs.mongodb.net/${db}`;

const Imoveis = require("./models/imoveis");

app.post("/create", async (req, res) => {
  const { tipo, titulo, descricao, preco, quartos, pet, vagas, localizacao } =
    req.body;

  const imovel = new Imoveis({ tipo, titulo, descricao, preco, quartos, pet, vagas, localizacao });
  await imovel.save();

  res.json(imovel);
});

app.listen(port, () => console.log(`Servidor no http://localhost:${port}/`));
mongoose
  .connect(cloud)
  .then(() => console.log("Conectado ao mongo"))
  .catch((erro) => console.error(erro));

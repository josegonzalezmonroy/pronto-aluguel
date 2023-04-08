const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const db = "imoveisdb";
const cloud = `mongodb+srv://usuario_teste:5QzyH5D7BAeZnwDM@cluster0.t6zgnjs.mongodb.net/${db}`;

const routes = require('./routes/routes')
app.use(routes)

const port = 3002;
app.listen(port, () => console.log(`Servidor no http://localhost:${port}/`));
mongoose
  .connect(cloud)
  .then(() => console.log("Conectado ao mongo"))
  .catch((erro) => console.error(erro));

const Imoveis = require("../models/imoveis");

async function novoImovel(req, res) {
  const { tipo, titulo, descricao, preco, quartos, pet, vagas, localizacao } =
    req.body;

  const imovel = new Imoveis({
    tipo,
    titulo,
    descricao,
    preco,
    quartos,
    pet,
    vagas,
    localizacao,
  });
  await imovel.save();

  res.json(imovel);
}

async function listaDeImoveis(req, res) {
  const lista = await Imoveis.find({});
  return res.status(200).json(lista);
}

module.exports = { novoImovel, listaDeImoveis };

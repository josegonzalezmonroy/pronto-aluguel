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

async function deleteImovel(req, res) {
  const { id } = req.params;

  try {
    const excluir = await Imoveis.findByIdAndDelete(id);
    excluir
      ? res.json(`id: ${id} removido`)
      : res.status(404).json(`id: ${id} nao encontrado`);
  } catch (err) {
    console.error(err);
    res.status(400).json("Formato de id nao valido");
  }
}

async function editarImovel(req, res) {
  const { id } = req.params;
  const { tipo, titulo, descricao, preco, quartos, pet, vagas, localizacao } =
    req.body;
try {
  const imovel = await Imoveis.findById(id);
  imovel
    ? (await imovel.updateOne({
        tipo,
        titulo,
        descricao,
        preco,
        quartos,
        pet,
        vagas,
        localizacao,
      }),
      res.status(202).json("Modificado com sucesso"))
    : res.status(404).json("Erro");

} catch (err) {
     console.error(err)
        return res.status(400).json("Erro")
}
}

module.exports = { novoImovel, listaDeImoveis, deleteImovel, editarImovel };

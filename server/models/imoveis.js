const mongoose= require('mongoose')
const Schema = mongoose.Schema

const imoveisSchema = new Schema({
  tipo: String,
  titulo: String,
  descricao: String,
  preco: Number,
  quartos: Number,
  pet: Boolean,
  vagas: Number,
  localizacao: Number
});

const Imoveis = mongoose.model("imoveis", imoveisSchema);

module.exports = Imoveis 

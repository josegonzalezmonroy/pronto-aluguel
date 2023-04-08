const express = require('express')
const router = express.Router()
const imoveis = require('../controllers/imoveisController')

router.post('/create', imoveis.novoImovel)
router.get('/', imoveis.listaDeImoveis)

module.exports = router
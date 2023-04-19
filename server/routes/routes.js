const express = require('express')
const router = express.Router()
const imoveis = require('../controllers/imoveisController')

router.get('/', imoveis.listaDeImoveis)
router.post('/create', imoveis.novoImovel)
router.delete('/imoveis/:id', imoveis.deleteImovel)
router.patch('/edit/:id', imoveis.editarImovel) 

module.exports = router
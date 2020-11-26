const express = require('express')
const router = express.Router()

//RETORNA TODOS OS ORÇAMENTOS
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Testando GET na rota de Order'
  })
})

//CRIA UM NOVO ORÇAMENTO
router.post('/', (req, res, next) => {

  const orcamento = {
    idService: req.body.idService,
    dataPublic: req.body.dataPublic,
    dataFinal: req.body.dataFinal
  }
  res.status(201).send({
    orderCreate: orcamento,
    mensagem: 'Orçamento criado com sucesso'
  })
})

//RETORNA DETALHES DO ORÇAMENTO
router.get('/:idOrder', (req, res, next) => {
  const id = req.params.idOrder
  res.status(200).send({
    mensagem: 'Detalhes do orçamento',
    idOrder: id
  })


})

//EXCLUI O ORÇAMENTO
router.delete('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Testando DELETE na rota de Services'
  })
})

module.exports = router
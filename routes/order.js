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
  res.status(201).send({
    mensagem: 'Testando POST na rota de Order'
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
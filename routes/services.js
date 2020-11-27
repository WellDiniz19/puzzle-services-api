const express = require('express')
const router = express.Router()
const mysql = require('../database/mysql').pool

//RETORNA TODOS OS SERVIÇOS
router.get('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Testando GET na rota de Services'
  })
})

//CRIA UM NOVO SERVIÇOS
router.post('/', (req, res, next) => {

  /*const servico = {
    tipo: req.body.tipo,
    descricao: req.body.descricao,
    localizacao: req.body.localizacao,
    dataPublic: req.body.dataPublic
  }*/ //Teste

  mysql.getConnection((error, conn) => {
    conn.query(
      'INSERT INTO tb_services (tipo, descricao, localizacao, dataPublic) VALUES (?,?,?,?,)',
      [req.body.tipo, req.body.descricao, req.body.localizacao, req.body.dataPublic],
      (error, resultado, field) => {
        conn.release()

        if (error) {
          res.status(500).send({
            error: error,
            response: null
          })
        }
        res.status(201).send({
          mensagem: 'Serviço criado com sucesso',
          idService: resultado.insertId
        })

      }
    )
  })
})

//RETORNA DETALHES DO SERVIÇO
router.get('/:idService', (req, res, next) => {
  const id = req.params.idService

  if (id == 'novo') {
    res.status(200).send({
      mensagem: 'Serviço localizado pelo ID',
      idService: id
    })
  } else {
    res.status(200).send({
      mensagem: 'Serviço não localizado'
    })
  }

})

//ALTERA O SERVIÇO
router.patch('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Testando PATCH na rota de Services'
  })
})

//EXCLUI O SERVIÇO
router.delete('/', (req, res, next) => {
  res.status(200).send({
    mensagem: 'Testando DELETE na rota de Services'
  })
})

module.exports = router
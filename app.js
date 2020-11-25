const express = require('express')
const app = express()
const morgan = require('morgan')

const rotaServices = require('./routes/services')
const rotaOrder = require('./routes/order')

app.use(morgan('dev'))

app.use('/services', rotaServices)
app.use('/order', rotaOrder)

app.use((req, res, next) => {
  const erro = new Error('Não encontrado')
  erro.status = 404
  next(erro)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res.send({
    erro: {
      mensagem: error.message
    }
  })
})

module.exports = app
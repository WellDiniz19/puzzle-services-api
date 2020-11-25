const express = require('express')
const app = express()

const rotaServices = require('./routes/services')
const rotaOrder = require('./routes/order')

app.use('/services', rotaServices)
app.use('/order', rotaOrder)


module.exports = app
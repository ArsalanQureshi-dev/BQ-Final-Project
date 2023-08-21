const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const port = process.env.SERVER_PORT || 4000

const clinetpath = path.join(__dirname, './clinet/dist')
app.use('/', express.static(clinetpath))

app.use(express.json()) // stringify me change karnay k liye ye karyngy json ko
app.use(cors())

app.use('/api', require('./api/users/router'))
app.use('/api', require('./api/category/router'))
app.use('/api', require('./api/brands/router'))
app.use('/api', require('./api/products/router'))
app.use('/api', require('./api/orders/router'))


app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname, './clinet/dist/index.html'))

})


app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})
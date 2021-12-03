const express = require('express')
const routes = require('./routes')
const server = express()
const port = 8080

server.use(express.json())

server.use('/', routes)

server.listen(port, () => {
    console.log('Servidor rodando na porta '+ port)
})


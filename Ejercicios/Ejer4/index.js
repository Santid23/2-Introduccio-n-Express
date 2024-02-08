const express = require('express')
const saludar = require('./archivo')

const app = express()

app.get('/saluda', function(req, res) {
    res.send(saludar())
})

app.listen(process.env.PORT || 3000, (e) => {
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )
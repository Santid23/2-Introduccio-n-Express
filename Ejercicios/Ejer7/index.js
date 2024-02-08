const express = require('express')
const data = require('./datos')
const randomNumber = require('./randomNumber')

const app = express()

app.get('/ejer7', function(req, res){
    const random = randomNumber()
    data[random] ++

    res.send(data)
})

app.listen(process.env.PORT || 3000, (e) => {
    e
    ? console.error('No se ha podido iniciar el servidor')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
} )
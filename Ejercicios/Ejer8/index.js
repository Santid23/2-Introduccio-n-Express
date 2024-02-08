const express = require('express')
const data = require('./datos')
const randomNumber = require('./randomNumber')
const array = require('./datos')

const app = express()

app.get('/ejer8', function(req, res){
    const random = randomNumber()
    data[random] += 1

    res.send(data)
})

app.get('/borrar/:numero', function(req, res){
    if(req.params.numero < array.length){
    data[req.params.numero] = 0
    res.send(array)
    }else{
    res.send('El indice indicado no está en el array')
}
})

app.listen(3000)
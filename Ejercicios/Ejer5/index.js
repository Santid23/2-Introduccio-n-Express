const express = require('express')

const app = express()

const data = {
    name: 'Santi',
    lastName: 'Domínguez',
    age: 27
}

app.get('/name/:name', function(req, res){
    data.name = req.params.name
    res.send(data)
})

app.get('/lastName/:lastName', function(req, res){
    data.lastName = req.params.lastName
    res.send(data)
})

app.get('/age/:age', function(req, res){
    data.age = req.params.age
    res.send(data)
})

app.listen(3000)
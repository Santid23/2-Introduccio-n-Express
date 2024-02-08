const express = require(`express`)

const app = express()

//app.get(`/`, function(request, response){
  //  response.send(`<h1>hola caracola<h1>`)
//})

//app.get(`/despedida`, function(request, response){
  //  response.send(`<h1>ADIOS CARACOLA<h1>`)
//})

app.get(`/datos`, function(request, response){
    response.send({
        results:[
            {nombre: "Macarena"},
            {nombre: "Paula"}
        ]
    })
})

app.listen(3000)
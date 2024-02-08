const express = require(`express`)

const app = express()

const nombres = ["Vanesa", "Luis", "Eva", "Jose", "Yolanda"]

app.get(`/persona`, function(request, response){
    response.send(nombres)
})

app.get(`/persona/:nombre`, function(request, response){
    let {nombre} = request.params

    let index = nombres.findIndex((e) => e === nombre)
        res.send({
            result: nombres[index]
        })
    })

app.listen(3001)
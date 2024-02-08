const express = require('express')

const app = express()

const students = ['Carlos', 'Estet', 'Víctor', 'Antonio', 'Nuria', 'María', 'Gloria', 'Mildry', 'Marina']

app.get('/:newteacher', function(req, res) {
    students.push(req.params.newteacher)
    res.send(students)
})

app.listen(3000)
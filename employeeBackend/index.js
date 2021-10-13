const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(cors())
const Employee = require('./models/employees')
const { request, response } = require('express')


app.get('/api/employee',(request,response) =>{
    Employee.find({}).then(employees => {
        response.json(employees)
    })
})

app.post('/api/employee',(request,response) => {
    const body = request.body
    const employee = new Employee ({
        name:body.name,
        designation:body.designation,
        contactNumber:body.contactNumber,
        email:body.email,
        address:body.address,
        salary:body.salary
    })
    employee.save().then(savedEmployee => {
        response.json(savedEmployee)
    })
})

app.get('/api/employee/:id',(request,response) => {
    Employee.findById(request.params.id)
    .then(employee => {
        response.json(employee)
    })
})

app.delete('/api/employee/:id',(request,response) => {
    Employee.findByIdAndRemove(request.params.id)
    .then(result => {
        response.status(404).end()
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
    console.log(`server running in the port ${PORT}`)
})
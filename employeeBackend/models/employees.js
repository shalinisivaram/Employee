const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
console.log('connecting to',url)
mongoose.connect(url,{})
.then(result => {
    console.log('Connected to DB')
})
.catch((error) => {
    console.log('error connecting to DB')
})

const employeeSchema = new mongoose.Schema({
    name:String,
    designation:String,
    contactNumber:Number,
    email:String,
    address:String,
    salary:Number
})

employeeSchema.set('toJSON',{
    transform:(document,returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Employee',employeeSchema)
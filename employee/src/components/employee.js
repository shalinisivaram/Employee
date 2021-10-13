import React from 'react'
import {Accordion, Button} from 'react-bootstrap'
import '../App.css'

const Employee = ({employee,deleteEmployee}) => {


    return(

       <Accordion> 
        <Accordion.Header> {employee.name} - {employee.designation} <br/>
        </Accordion.Header>      
       <Accordion.Body> 
       <div>
        <strong>Contact Number:</strong> {employee.contactNumber} <br/>
        <strong>Email: </strong>{employee.email}<br/>
        <strong> Address: </strong> {employee.address}<br/>
         <strong> Salary:</strong>{employee.salary}<br/>
          <Button variant="danger" onClick={() => deleteEmployee(employee)}>Delete</Button>
          </div>  
        </Accordion.Body>
       </Accordion>
     )}
        
        
 export default Employee
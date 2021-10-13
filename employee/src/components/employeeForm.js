import React from 'react'
import { Form,Button } from 'react-bootstrap'

const EmployeeForm = ({onsubmit,setName,setDesignation,setContactNumber,setEmail,setAddress,setSalary,
                       name,designation,contactNumber,email,address,salary}) => {
const nameChange = (event) =>  setName(event.target.value)
const designationChange = (event) =>  setDesignation(event.target.value)
const numberChange = (event) =>  setContactNumber(event.target.value)
const emailChange = (event) => setEmail(event.target.value)
const addressChange = (event) => setAddress(event.target.value)
const salaryChange = (event) => setSalary(event.target.value)

    return(
        <Form onSubmit={onsubmit}>
           <Form.Group>
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" value={name} onChange={nameChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Designation</Form.Label>
               <Form.Control type="text" value={designation} onChange={designationChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Email</Form.Label>
               <Form.Control type="text" value={email} onChange={emailChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Contact Number</Form.Label>
               <Form.Control type="text" value={contactNumber} onChange={numberChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Address</Form.Label>
               <Form.Control type = "text" value={address} onChange={addressChange}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Salary</Form.Label>
               <Form.Control type = "text" value={salary} onChange={salaryChange}/>
           </Form.Group> <br/>
           <Button variant="dark" type="submit">Save</Button>
        </Form>    
    )}
export default EmployeeForm
import './App.css';
import { useEffect, useState } from 'react';
import EmployeeForm from './components/employeeForm';
import EmployeeService from './services/employee';
import Employee from './components/employee';


const App = () => {
  const[employee,setEmployee] = useState([])
  const[name,setName] = useState('')
  const[designation,setDesignation] = useState('')
  const[email,setEmail] = useState('')
  const[contactNumber,setContactNumber] = useState('')
  const[address,setAddress] = useState('')
  const[salary,setSalary] = useState('')

  useEffect(()=> {
    EmployeeService.getAll()
      .then(intialData => { setEmployee(intialData)})
  },[])

  const addEmployee = (event) =>  {
    event.preventDefault();
    const employeeObject = {
      name:name,
      designation:designation,
      contactNumber:contactNumber,
      email:email,
      address:address,
      salary:salary
    }
    EmployeeService.create(employeeObject)
    .then(returnedData => {
      setEmployee([...employee,returnedData])
      setName('')
      setDesignation('')
      setContactNumber('')
      setEmail('')
      setAddress('')
      setSalary('')
    })
  }

const deleteEmployee = employeetoDelete =>{
    if(window.confirm(`are you sure want to delete ${employeetoDelete.name}`))
    {
      EmployeeService.remove(employeetoDelete.id)
      setEmployee(employee.filter(employee => employee.id !==  employeetoDelete.id ))
    }
}
const rowStyle = {
  display:'flex',
  flexDirection:'row',
  padding:30,  
}
const headStyle = {
  fontStyle:'italic',
  fontSize:40,
  color:'#000000',
  textAlign:'center',
  textDecoration:'underline'
}

  return(
    <div style={rowStyle} className="main">
      <div>
      <h1 style={headStyle}>Add New Employee</h1>
      <EmployeeForm name={name} designation={designation} 
        contactNumber={contactNumber} email={email} 
        address={address} salary={salary} setName={setName} setDesignation={setDesignation}
        setContactNumber={setContactNumber} setEmail={setEmail} setAddress ={setAddress} setSalary={setSalary}
        onsubmit={addEmployee}/>
      </div>
        <div style={{"padding":30 , "position":"relative","bottom":25,"left":150}}>
        <h2 style={headStyle}>Employee List</h2> <br/>
        {employee.map(employee => <Employee key={employee.id} employee={employee} deleteEmployee={deleteEmployee} />)}
        </div>  
    </div> 
  )
}

export default App;

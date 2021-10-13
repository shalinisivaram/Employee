import axios from 'axios'
const baseurl = 'http://localhost:3001/api/employee'

const getAll = () => {
    const request = axios.get(baseurl)
    return request.then(response => response.data)
}
const create = (newObjct) =>{
    const request = axios.post(baseurl,newObjct)
    return request.then(response => response.data)
}

const remove = id => {
    const response = axios.delete(`${baseurl}/${id}`)
    return response.data
}

const EmployeeService = {
    getAll,create,remove
}

export default EmployeeService
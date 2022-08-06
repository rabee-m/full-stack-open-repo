import axios from "axios";
const baseUrl = 'http://localhost:3002/api/persons';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = (newPersonObject) => {
    const request = axios.post(baseUrl, newPersonObject)
    return request.then(response => response.data)
}

const update = (updatedPerson) => {
    const request = axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson);
    return request.then(response => response.data)

}

const deleteData = (id) => {
    const request = axios.delete(baseUrl + `/${id}`)
    return request.then(response => response.data)
}

export default {getAll, add, deleteData, update}
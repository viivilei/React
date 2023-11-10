import axios from "axios"

const baseUrl = "https://localhost:7204/api/users"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newUser => {
    return axios.post(baseUrl, newUser)
}

const Login = (credentials) => {
    const request = axios.post("https://localhost:7204/api/authentication", credentials)
    return request.then(response => response.data)
}

const remove = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = object => {
    return axios.put(`${baseUrl}/${object.userId}`, object)
}

export default { getAll, create, remove, update, Login }
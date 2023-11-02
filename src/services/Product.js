import axios from "axios"

const baseUrl = "https://localhost:7204/api/products"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newProduct => {
  return axios.post(baseUrl, newProduct)
} 

const remove = id => {
  return axios.delete(`${baseUrl}/${id}`)
}


export default { getAll, create, remove }
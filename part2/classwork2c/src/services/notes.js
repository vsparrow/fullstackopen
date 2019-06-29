import axios from 'axios'
const baseUrl = 'http://fullstackopen-vsparrow.c9users.io:8081/notes'

const getAll = () => axios.get(baseUrl)

const create = newObject => axios.post(baseUrl, newObject)

const update = (id,newObject) => axios.put(`${baseUrl}/${id}`, newObject)

export default {getAll, create, update}

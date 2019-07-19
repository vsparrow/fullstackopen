import axios from 'axios';
// const baseUrl = 'http://fullstackopen-vsparrow.c9users.io:8081/notes';
// const baseUrl = 'https://infinite-basin-47509.herokuapp.com/notes/';
const baseUrl = '/notes'; //this is when we * build * the react app and place it in the backend's folder

const getAll = () => axios.get(baseUrl);

const create = newObject => axios.post(baseUrl, newObject);

const update = (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject);

export default { getAll, create, update };
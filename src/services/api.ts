import axios from 'axios';

const api = axios.create({
    // baseURL: "http://localhost:8888/produtos"
    baseURL: "https://my-json-server.typicode.com/rafagonzaga/json-server"
})

export default api;
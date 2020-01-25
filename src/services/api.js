import axios from 'axios';

const api = axios.create({ 
  baseURL: 'http://localhost:3001/api' //importando a api que vou utilizar (criada no curso nodejs)
})

export default api;
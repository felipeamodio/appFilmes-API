
import axios from 'axios';
// criando a base url https://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})

export default api;
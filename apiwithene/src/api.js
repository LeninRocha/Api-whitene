import axios from 'axios';

const api = axios.create({
    baseURL: 'https://witheneapi.herokuapp.com'
});

export default api;
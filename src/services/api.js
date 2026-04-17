import axios from 'axios';

const api = axios.create ({
    baseURL: "https://node-js-api-orkut-vnw.onrender.com/",
    api_key:"12345"
})

//intercepta as requisições para adicionar o token de autenticação
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
)

export default api;
    
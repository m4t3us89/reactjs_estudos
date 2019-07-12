import axios from 'axios'

const api = axios.create({
    baseURL: "https://rocketseat-node.herokuapp.com/api"
})

api.interceptors.request.use(function(config){
    console.log('Request-Sucesso', config)
    return config
}, function(error){
    console.log('Request-Error', error)
    return Promise.reject(error)
})

api.interceptors.response.use(function(config){
    console.log('Response-Sucesso', config)
    return config
}, function(error){
    console.log('Response-Error', error)
    return Promise.reject(error)
})

export default api

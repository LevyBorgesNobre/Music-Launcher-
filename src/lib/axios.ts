import axios from "axios";

export const api  = axios.create({
    baseURL:'https://mlauncherapi-production.up.railway.app'
})

api.interceptors.request.use((config)=> {
    const jwt = localStorage.getItem('jwt')
    if(jwt){
    config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
})
import axios from "axios";

export const api  = axios.create({
    baseURL:'https://musiclauncherapi.onrender.com/'
})

api.interceptors.request.use((config)=> {
    const jwt = localStorage.getItem('jwt')
    if(jwt){
    config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
})
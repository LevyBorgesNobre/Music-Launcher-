import axios from "axios";

export const api  = axios.create({
    baseURL:'https://mlauncherapi-production.up.railway.app'
})
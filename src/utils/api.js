import axios from "axios";

export function getToken () {
    if (typeof window !== "undefined") {
        return sessionStorage.getItem("session");
    } else {
    return "";
    }
}

const axiosClient = axios.create({ baseURL: 'http://localhost:3131' });
const config = {
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + getToken() 
    }
}

export const getUser = () => axiosClient.get('/auth/user', config)



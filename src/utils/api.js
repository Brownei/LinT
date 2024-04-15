import axios from "axios"

// const URL = import.meta.env.API_ENDPOINT
const token = sessionStorage.getItem('session')

console.log(token)

export const getCurrentUser = () => {
    return axios.get(`http://localhost:3131/auth/user`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}
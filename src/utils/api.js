import axios from "axios"

// const URL = import.meta.env.API_ENDPOINT
const token = sessionStorage.getItem('session')
export const parsedToken = JSON.parse(token)
console.log(parsedToken)

export function getCurrentUser() {
    return axios.get(`http://localhost:3131/auth/user`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken
        }
    })
}
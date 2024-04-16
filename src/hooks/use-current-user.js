import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { parsedToken } from "../utils/api"

async function getCurrentUser() {
    const {data} = await axios.get(`http://localhost:3131/auth/user`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken
        }
    })
    return data
}

export const useCurrentUser = () => useQuery({
    queryKey: ['current-user'],
    queryFn: getCurrentUser,
})
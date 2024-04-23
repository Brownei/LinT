import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { parsedToken } from "../utils/api"

async function getProfile(username) {
    const {data} = await axios.get(`http://localhost:3131/profile/${username}`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken
        }
    })
    return data
}

export const useProfile = (username) => useQuery({
    queryKey: ['current-user'],
    queryFn: () => getProfile(username),
})
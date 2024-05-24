import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getToken } from "../utils/api"

async function getProfile(username) {
    const {data} = await axios.get(`/api/profile/${username}`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })

    return data
}

export const useProfile = (username) => useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(username),
})


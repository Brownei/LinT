import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getToken } from "../utils/api"

async function getUserPosts(username) {
    const {data} = await axios.get(`http://localhost:3131/posts/username/${username}`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    return data
}

export const useUserPosts = (username) => useQuery({
    queryKey: ['current-user-posts'],
    queryFn: () => getUserPosts(username),
})
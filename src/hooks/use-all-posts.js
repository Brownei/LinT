import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { parsedToken } from "../utils/api"

async function getAllPosts() {
    const {data} = await axios.get(`http://localhost:3131/posts`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken
        }
    })
    return data
}

export const useAllPosts = () => useQuery({
    queryKey: ['all-posts'],
    queryFn: getAllPosts,
})
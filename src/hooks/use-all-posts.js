import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getToken } from "../utils/api"


async function getAllPosts() {
    const {data} = await axios.get(`/api/posts`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    return data
}

export const useAllPosts = () => useQuery({
    queryKey: ['all-posts'],
    queryFn: getAllPosts,
})
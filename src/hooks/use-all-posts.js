import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"


async function getAllPosts() {
    const {data} = await api.get(`/api/posts`)
    return data
}

export const useAllPosts = () => useQuery({
    queryKey: ['all-posts'],
    queryFn: getAllPosts,
    refetchOnWindowFocus: true
})
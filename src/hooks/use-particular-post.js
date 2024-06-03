import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getParticularPost(id) {
    const {data} = await api.get(`/post/${id}`)
    return data
}

export const useParticularPost = (post) => useQuery({
    queryKey: ['idea-data'],
    queryFn: () => getParticularPost(post),
})

import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"


async function getIdeaData(id) {
    const {data} = await api.get(`/posts/${id}`)
    return data
}

export const useIdeaData = (id) => useQuery({
    queryKey: ['all-posts', id],
    queryFn: () => getIdeaData(id),
})
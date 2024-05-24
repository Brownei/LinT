import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getToken } from "../utils/api"


async function getIdeaData(id) {
    const {data} = await axios.get(`/api/posts/${id}`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + getToken()
        }
    })
    return data
}

export const useIdeaData = (id) => useQuery({
    queryKey: ['all-posts', id],
    queryFn: () => getIdeaData(id),
})
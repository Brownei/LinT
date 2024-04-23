import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { parsedToken } from "../utils/api"

async function getIdeaData(id) {
    const {data} = await axios.get(`http://localhost:3131/posts/${id}`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + parsedToken
        }
    })
    return data
}

export const useIdeaData = (id) => useQuery({
    queryKey: ['all-posts', id],
    queryFn: () => getIdeaData(id),
})
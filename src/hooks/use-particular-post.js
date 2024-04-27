import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { parsedToken } from "../utils/api"

async function getParticularPost(id) {
    const {data} = await axios.get(`http://localhost:3131/post/${id}`, {}, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + parsedToken
        }
    })

    return data
}

export const useParticularPost = (post) => useQuery({
    queryKey: ['idea-data'],
    queryFn: () => getParticularPost(post),
})


import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getToken } from "../utils/api"

async function getAllInterests() {
    const {data} = await axios.get(`http://localhost:3131/collaborators/requests/received`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    return data
}

export const useAllInterests = () => useQuery({
    queryKey: ['all-interests'],
    queryFn: getAllInterests,
})

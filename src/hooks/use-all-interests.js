
import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getAllInterests() {
    const {data} = await api.get(`/collaborators/requests/received`)
    return data
}

export const useAllInterests = () => useQuery({
    queryKey: ['all-interests'],
    queryFn: getAllInterests,
})

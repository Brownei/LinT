import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getSentRequests() {
    const {data} = await api.get(`/collaborators/requests/sent`)
    return data
}

export const useSentRequests = () => useQuery({
    queryKey: ['request-sent'],
    queryFn: () => getSentRequests(),
})

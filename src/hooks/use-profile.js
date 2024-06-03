import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getProfile(username) {
    const {data} = await api.get(`/profile/${username}`)
    return data
}

export const useProfile = (username) => useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(username),
})


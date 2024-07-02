import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getProfile(username) {
  const { data } = await api.get(`/profile/${username}`)
  return data
}

export const useProfile = (username) => useQuery({
  queryKey: ['person-profile'],
  queryFn: () => getProfile(username),
  refetchOnWindowFocus: true,
  refetchOnMount: true,
  refetchOnReconnect: true,
  staleTime: 0,
  gcTime: 0
})


import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"


async function getAllConversations() {
  const { data } = await api.get(`/conversations`)
  return data
}

export const useAllConversations = () => useQuery({
  queryKey: ['all-conversations'],
  queryFn: getAllConversations,
})



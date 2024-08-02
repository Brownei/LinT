import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"


async function getParticularConversation(id) {
  const { data } = await api.get(`/conversations/${id}`)
  return data
}

export const useParticularConversation = (id) => useQuery({
  queryKey: ['all-conversations', id],
  queryFn: () => getParticularConversation(id),
})


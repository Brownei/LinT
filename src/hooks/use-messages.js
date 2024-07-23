import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"


async function getAllMessages(id) {
  const { data } = await api.get(`messages/${id}`)
  console.log(data)
  return data
}

export const useAllMessages = (id) => useQuery({
  queryKey: ['all-messages', id],
  queryFn: () => getAllMessages(id),
})



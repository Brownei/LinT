import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getSentRequests() {
  const { data } = await api.get(`/collaborators/requests/sent`)
  console.log(data)
  return data.requestSent
}

export const useSentRequests = () => useQuery({
  queryKey: ['request-sent'],
  queryFn: () => getSentRequests(),
})

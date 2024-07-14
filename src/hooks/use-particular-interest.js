import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"


async function getParticularInterestData(id) {
  const { data } = await api.get(`/collaborators/requests/received/${id}`)
  return data
}

export const useParticularInterest = (id) => useQuery({
  queryKey: ['all-interests', id],
  queryFn: () => getParticularInterestData(id),
})


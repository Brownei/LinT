import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"


async function getAllCollaborators() {
  const { data } = await api.get(`/collaborators`)
  return data
}

export const useAllCollaborators = () => useQuery({
  queryKey: ['all-collaborators'],
  queryFn: getAllCollaborators,
})

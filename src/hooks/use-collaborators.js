import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"


async function getAllCollaborators() {
  const { data } = await api.get(`/collaborators`)
  return data.collaborators
}

export const useAllCollaborators = () => useQuery({
  queryKey: ['all-collaborators'],
  queryFn: getAllCollaborators,
})


async function getAllCollaboratorsConcerningAUser(username) {
  const { data } = await api.get(`/collaborators/${username}`)
  return data.collaborators
}

export const useAllCollaboratorsConcerningAUser = (username) => useQuery({
  queryKey: ['all-collaborators'],
  queryFn: () => getAllCollaboratorsConcerningAUser(username),
})

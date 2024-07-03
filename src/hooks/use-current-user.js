import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getCurrentUser() {
  const { data } = await api.get(`/auth/user`)
  return data
}

export const useCurrentUser = () => useQuery({
  queryKey: ['current-user'],
  queryFn: getCurrentUser,
  onError({ status }) {
    console.log(status)
  },
})

import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getCurrentUser() {
  const { data } = await api.get(`/auth/user`)
  console.log(data.userInfo)
  return data.userInfo
}

export const useCurrentUser = () => useQuery({
  queryKey: ['current-user'],
  queryFn: getCurrentUser,
})

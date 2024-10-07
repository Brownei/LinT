import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getAllNotifications() {
  const { data } = await api.get(`/notifications`)
  return data
}

export const useAllNotifications = () => useQuery({
  queryKey: ['all-notifications'],
  queryFn: getAllNotifications,
})


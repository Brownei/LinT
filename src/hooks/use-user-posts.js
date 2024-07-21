import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getUserPosts(username) {
  const { data } = await api.get(`/posts/username/${username}`)
  return data.posts
}

export const useUserPosts = (username) => useQuery({
  queryKey: ['current-user-posts'],
  queryFn: () => getUserPosts(username),
})

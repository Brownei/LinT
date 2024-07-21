import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getParticularPost(id) {
  const { data } = await api.get(`/post/${id}`)
  console.log(data)
  return data
}

export const useParticularPost = (post) => useQuery({
  queryKey: ['idea-data'],
  queryFn: () => getParticularPost(post),
})

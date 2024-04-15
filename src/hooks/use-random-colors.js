import { useQuery } from "@tanstack/react-query"
import axios from "axios"

async function getColors() {
  const {data} = await axios.get('https://api.color.pizza/v1/?values=00f,f00,f00&list=bestOf')
  return data
}

export const useColors = () => useQuery({
  queryKey: ['random-colors'],
  queryFn: getColors
})
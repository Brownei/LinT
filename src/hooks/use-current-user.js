import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { getToken } from "../utils/api"

async function getCurrentUser() {
    const {data} = await axios.get(`http://localhost:3131/auth/user`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + getToken() 
        }
    })
    return data
}

export const useCurrentUser = () => useQuery({
    queryKey: ['current-user'],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
    retry(failureCount, error) {
        return error.status !== 403 && failureCount < 3;
    },
    onError(error) {
        if (error.status === 403) {
            window.location.assign("/");
        }
    },
})

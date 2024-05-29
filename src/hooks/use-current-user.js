import { useQuery } from "@tanstack/react-query"
import { api } from "../utils/api"

async function getCurrentUser() {
    const {data} = await api.get(`/api/auth/user`)
    return data
}

export const useCurrentUser = () => useQuery({
    queryKey: ['current'],
    queryFn: getCurrentUser,
    refetchOnWindowFocus: false,
    retry(failureCount, error) {
        return error.status !== 403 && failureCount < 3;
    },
    onError({status}) {
        // if (error.status === 403) {
        //     window.location.assign("/");
        // }
        console.log(status)
    },
})

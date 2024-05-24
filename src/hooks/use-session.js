import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./use-auth-store";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import { api } from "../utils/api";

export function useSession() {
    const user = useAuthStore((state) => state.user);
    const clear = useAuthStore((state => state.clear))
    const setUser = useAuthStore((state) => state.setUser)
    const navigate = useNavigate();

    async function getCurrentUser() {
        const {data} = await api.get(`/api/auth/user`)
        return data
    }

    const useSessionQuery = () => useQuery({
        queryKey: ['current-user'],
        queryFn: getCurrentUser,
        refetchIntervalInBackground: false,
        onError(error) {
            if (error.status === 401 || error.status === 403) {
                clear();
                navigate("/");
            }
        },
        onSuccess({data}) {
            console.log(data)
            setUser(data);
        },
    });

    const {error, isFetching} = useSessionQuery()

    return {
        user: user,
        loading: isFetching,
        error,
        signOut() {
            clear()
            sessionStorage.removeItem('session')
            navigate("/")
        },
    };
}

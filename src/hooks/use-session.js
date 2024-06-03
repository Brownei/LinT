import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./use-auth-store";
import { useQuery } from "@tanstack/react-query";
import { useSettingProfileStore } from "./use-auth-store";
// import axios from "axios";
import { api } from "../utils/api";

export function useSession() {
    // const user = useAuthStore((state) => state.user);
    const clear = useAuthStore((state => state.clear))
    const setUser = useAuthStore((state) => state.setUser)
    const setProfile = useSettingProfileStore((state) => state.setProfile)
    const profile = useSettingProfileStore((state) => state.profile);
    const clearProfile = useSettingProfileStore((state => state.clearProfile))
    const navigate = useNavigate();

    async function getCurrentUser() {
        const {data} = await api.get(`/auth/user`)
        return data
    }

    const useProfileQuery = () => useQuery({
        queryKey: ['setting-profile'],
        queryFn: getCurrentUser,
        refetchIntervalInBackground: false,
        onSuccess({data}) {
            // console.log(data)
            setProfile(data);
        },
        onError() {
            // console.log(status)
            clearProfile();
            navigate("/");
        },
    })

    const useSessionQuery = () => useQuery({
        queryKey: ['current-user'],
        queryFn: getCurrentUser,
        refetchIntervalInBackground: false,
        onSuccess({data}) {
            // console.log(data)
            setUser(data);
        },
        onError() {
            // console.log(status)
            clear();
            navigate("/");
        },
    });

    const {data: user, error: settingProfileError, isFetching: isSettingProfileFetching} = useProfileQuery()
    const {error, isFetching} = useSessionQuery()

    return {
        user,
        profile,
        loading: isFetching,
        error,
        profileError: settingProfileError,
        profileLoading: isSettingProfileFetching,
        signOut() {
            clear()
            clearProfile()
            sessionStorage.removeItem('session')
            navigate("/")
        },
    };
}

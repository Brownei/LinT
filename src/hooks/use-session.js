import { useAuthStore } from "./use-auth-store";
import { getCurrentUser } from "../utils/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export function useSession() {
    const { user, set, clear, status } = useAuthStore();
    const controller = new AbortController();
    const navigate = useNavigate()
    // const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getCurrentUser()
            .then(({ data }) => {
                set(data)
                // setTimeout(() => setLoading(false), 1000);
            })
            .catch((err) => {
                console.log(err);
                clear()
                navigate('/')
                // setTimeout(() => setLoading(false), 1000);
            })

        return () => {
            controller.abort();
        };
    }, [user, controller])

    return { user, status }
}
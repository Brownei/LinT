/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useSession } from "../../hooks/use-session";
import { useAuthStore } from "../../hooks/use-auth-store";

export const AuthWrapper = () => {
	const {error, loading} = useSession()
    const clear = useAuthStore((state => state.clear))

	if(typeof window === "undefined" || error) {
		clear()
		window.location.assign('/')
	} 

	if (loading) {
		return (
			<div className="loader">
				<ClipLoader color="#0006B1" size={30} />
			</div>
		)
	}


	return (
		<>
			<Outlet />
		</>
	);
};


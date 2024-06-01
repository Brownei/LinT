/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuthStore } from "../../hooks/use-auth-store";
import { useCurrentUser } from "../../hooks/use-current-user";

export const AuthWrapper = () => {
	const {error, isLoading: loading} = useCurrentUser()
    const clear = useAuthStore((state => state.clear))

	if(error) {
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


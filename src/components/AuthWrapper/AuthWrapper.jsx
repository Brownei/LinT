/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useSession } from "../../hooks/use-session";


export const AuthWrapper = () => {
	const {error, isLoading: loading} = useSession()

	if(typeof window === "undefined" || error) {
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


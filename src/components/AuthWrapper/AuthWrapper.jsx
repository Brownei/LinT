/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useCurrentUser } from "../../hooks/use-current-user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthWrapper = () => {
	const { isLoading, error } = useCurrentUser();
  const navigate = useNavigate();

	useEffect(() => {
		const timeOut = setTimeout(() => {
			if(error) {
				navigate('/')
			} 
		}, 4000)

		return () => clearTimeout(timeOut)
	}, [error])
 
	if (isLoading) {
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

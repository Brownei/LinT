/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useCurrentUser } from "../../hooks/use-current-user";
// import { useNavigate } from "react-router-dom";

export const AuthWrapper = () => {
  const { isFetching, error } = useCurrentUser();
  // const navigate = useNavigate();

  if (isFetching) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
    </div>
    )
  }

  if(error) {
    window.location.assign('/')
  }

  return (
    <>
      <Outlet />
    </>
  );
};
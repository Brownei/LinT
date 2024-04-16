/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useCurrentUser } from "../../hooks/use-current-user";


export const AuthWrapper = () => {
  const {isLoading} = useCurrentUser();
  // const navigate = useNavigate();

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
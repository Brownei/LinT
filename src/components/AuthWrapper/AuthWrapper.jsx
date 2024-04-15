/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
// import { useNavigate } from "react-router-dom";
import { useSession } from "../../hooks/use-session";
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


export const AuthWrapper = () => {
  const session = useSession();
  // const navigate = useNavigate();

  if (session.status === "loading") {
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
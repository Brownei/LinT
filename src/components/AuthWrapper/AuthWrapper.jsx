/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuthStore } from "../../hooks/use-auth-store";
import { useGlobalContext } from "../../context/GlobalContext";

export const AuthWrapper = () => {
  const { currentUserLoading, currentUserError } = useGlobalContext()
  const clear = useAuthStore((state => state.clear))

  if (currentUserLoading) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
      </div>
    )
  }


  return <Outlet />
};


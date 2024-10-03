/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useAuthStore, useSettingProfileStore } from "../../hooks/use-auth-store";
import { useGlobalContext } from "../../context/GlobalContext";
import { useEffect } from "react";
import { getUserProfile } from "../../utils/api";

export const AuthWrapper = () => {
  const { currentUserLoading, currentUserError } = useGlobalContext()
  const clear = useAuthStore((state => state.clear))
  const setProfile = useSettingProfileStore((state) => state?.setProfile)

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getUserProfile();
      console.log(response);

      if (response?.profile !== undefined || null) {
        setUser(response?.profile)
      } else {
        setProfile(response)
      }
      // ...
    }
    fetchData();
  }, []);

  if (currentUserLoading) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
      </div>
    )
  }


  return <Outlet />
};


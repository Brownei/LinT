/* eslint-disable react/prop-types */
import "./AuthWrapper.scss"
import { Outlet } from "react-router-dom";
import { useAuthStore, useSettingProfileStore } from "../../hooks/use-auth-store";
import { useEffect } from "react";
import { getUserProfile } from "../../utils/api";

export const AuthWrapper = () => {
  const setUser = useAuthStore((state) => state.setUser)
  const setProfile = useSettingProfileStore((state) => state?.setProfile)

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getUserProfile();

      if (response?.profile !== undefined || null) {
        setUser(response?.profile)
      } else {
        setProfile(response)
      }
      // ...
    }
    fetchData();
  }, []);

  return <Outlet />
};


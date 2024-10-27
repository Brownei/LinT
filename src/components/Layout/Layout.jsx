/* eslint-disable react/prop-types */
import './Layout.scss'
import Nav from "../Nav/Nav";
import { Outlet, useLocation, useParams } from "react-router-dom";
import MobileNav from '../Mobile/MobileNav/MobileNav';
import MobileSettings from '../Mobile/MobileSettings/MobileSettings';
import { useGlobalContext } from '../../context/GlobalContext';
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';
import { getUserProfile } from '../../utils/api';
import { useAuthStore } from '../../hooks/use-auth-store';

export default function Layout() {
  const setUser = useAuthStore((state) => state?.setUser)
  const { id } = useParams()
  const location = useLocation()

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

  return (
    <main id="body">
      <div className='mobile-settings'>
        <MobileSettings />
      </div>

      <Nav />
      <Outlet />

      <div className="collaborate-mobile-page">
        {location.pathname !== `/messages/${id}` && <MobileNav />}
      </div>
    </main >
  )
}

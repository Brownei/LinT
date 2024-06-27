/* eslint-disable react/prop-types */
import './Layout.scss'
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useCurrentUser } from '../../hooks/use-current-user';
import MobileNav from '../Mobile/MobileNav/MobileNav';
import MobileSettings from '../Mobile/MobileSettings/MobileSettings';

export default function Layout() {
	const {data: user, error, isLoading} = useCurrentUser();
  const navigate = useNavigate();

  if(error) {
    window.location.assign('/')
  } else if (user && user?.profile === null) {
    window.location.assign('/setup-profile')
  }

  if (isLoading) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
    </div>
    )
  }


  return (
      <main id="body">
        <div className='mobile-settings'>
          <MobileSettings />
        </div>

        <Nav />
        <Outlet />

        <div className="collaborate-mobile-page">
          <MobileNav user={user}/>
        </div>
      </main>
  )
}

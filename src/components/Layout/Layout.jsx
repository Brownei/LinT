/* eslint-disable react/prop-types */
import './Layout.scss'
import Nav from "../Nav/Nav";
import { Outlet, useLocation, useParams } from "react-router-dom";
import MobileNav from '../Mobile/MobileNav/MobileNav';
import MobileSettings from '../Mobile/MobileSettings/MobileSettings';
import { useGlobalContext } from '../../context/GlobalContext';
import { ClipLoader } from 'react-spinners';

export default function Layout() {
  const { currentUserLoading } = useGlobalContext()
  const { id } = useParams()
  const location = useLocation()

  return (
    <main id="body">
      {currentUserLoading ? (
        <div>
          <ClipLoader />
        </div>
      ) : (
        <div>
          <div className='mobile-settings'>
            <MobileSettings />
          </div>

          <Nav />
          <Outlet />

          <div className="collaborate-mobile-page">
            {location.pathname !== `/messages/${id}` && <MobileNav />}
          </div>

        </div >

      )}
    </main >
  )
}

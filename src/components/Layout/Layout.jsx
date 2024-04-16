/* eslint-disable react/prop-types */
import './Layout.scss'
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useCurrentUser } from '../../hooks/use-current-user';

export default function Layout() {
  const {data: session, isLoading} = useCurrentUser()
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
    </div>
    )
  } else if (!session) {
    navigate('/')
  } else if (session && session.profile === null) {
    navigate('/setup-profile')
  } 

  return (
      <main id="body">
        <Nav />
        <Outlet />
      </main>
  )
}
/* eslint-disable react/prop-types */
import './Layout.scss'
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function Layout({user}) {
  const navigate = useNavigate();

  if (user.status === "loading") {
    return (
      <div className="loader">
        <ClipLoader color="#0006B1" size={30} />
    </div>
    )
  } else if (!user) {
    navigate('/')
  } else if (user && user.profile === null) {
    navigate('/setup-profile')
  } 

  return (
      <main id="body">
        <Nav />
        <Outlet />
      </main>
  )
}
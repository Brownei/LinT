/* eslint-disable react/prop-types */
import { Avatar } from '@mantine/core';
import { useMediaQuery } from 'react-responsive';
import { useLocation, NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useGlobalContext } from '../../../../context/GlobalContext';
import { useAuthStore } from '../../../../hooks/use-auth-store';

const MobileProfile = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const { currentUserLoading } = useGlobalContext()
  const user = useAuthStore((state) => state?.user)
  const location = useLocation()
  return (
    <NavLink to="/profile" className={location.pathname.includes('/profile') ? 'profile-selected' : 'profile'}>
      {currentUserLoading ? <ClipLoader size={isMobile ? 20 : 30} color='#3338C1' /> : <Avatar size={30} src={user?.profileImage} />}
    </NavLink>
  )
}

export default MobileProfile

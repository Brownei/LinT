/* eslint-disable react/prop-types */
import { Avatar } from '@mantine/core';
import { useLocation, NavLink } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { useGlobalContext } from '../../../../context/GlobalContext';
import { useAuthStore } from '../../../../hooks/use-auth-store';

const MobileProfile = () => {
  const { currentUserLoading } = useGlobalContext()
  const user = useAuthStore((state) => state?.user)
  const location = useLocation()
  return (
    <NavLink to="/profile" className={location.pathname.includes('/profile') ? 'profile-selected' : 'profile'}>
      {currentUserLoading ? <ClipLoader /> : <Avatar size={30} src={user?.profileImage} />}
    </NavLink>
  )
}

export default MobileProfile

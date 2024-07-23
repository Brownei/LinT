/* eslint-disable react/prop-types */
import { Avatar } from '@mantine/core';
import { useLocation, NavLink } from 'react-router-dom';
import { useGlobalContext } from '../../../../context/GlobalContext';

const MobileProfile = () => {
  const { user } = useGlobalContext()
  const location = useLocation()
  return (
    <NavLink to="/profile" className={location.pathname.includes('/profile') ? 'profile-selected' : 'profile'}>
      <Avatar size={30} src={user.profile?.profileImage} />
    </NavLink>
  )
}

export default MobileProfile

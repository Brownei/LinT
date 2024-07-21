/* eslint-disable react/prop-types */
import { Avatar } from '@mantine/core';
import { useLocation, NavLink } from 'react-router-dom';

const MobileProfile = ({ user }) => {
  const location = useLocation()
  return (
    <NavLink to="/profile" className={location.pathname.includes('/profile') ? 'profile-selected' : 'profile'}>
      <Avatar size={30} src={user?.profile.profileImage} />
    </NavLink>
  )
}

export default MobileProfile

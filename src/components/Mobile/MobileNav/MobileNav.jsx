/* eslint-disable react/prop-types */
import './MobileNav.scss';
import { Avatar } from '@mantine/core';
import MobileCollaborate from '../../Nav/NavComponents/MobileNavComponents/MobileCollaborate'
import MobileNotification from '../../Nav/NavComponents/MobileNavComponents/MobileNotification'
// import MobileProfile from '../../Nav/NavComponents/MobileNavComponents/MobileProfile'
import Message from '../../Nav/NavComponents/Message';

const MobileNav = ({user}) => {
  return (
    <div id='mobile-nav'>
      <div className='navs'>
        <MobileCollaborate />
        <Message />
        <MobileNotification />
        <Avatar src={user.profile.profileImage}/>
      </div>
    </div>
  )
}

export default MobileNav
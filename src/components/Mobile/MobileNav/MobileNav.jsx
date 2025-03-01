/* eslint-disable react/prop-types */
import './MobileNav.scss';
import MobileCollaborate from '../../Nav/NavComponents/MobileNavComponents/MobileCollaborate'
import MobileNotification from '../../Nav/NavComponents/MobileNavComponents/MobileNotification'
import MobileProfile from '../../Nav/NavComponents/MobileNavComponents/MobileProfile'
import Message from '../../Nav/NavComponents/Message';

const MobileNav = () => {
  return (
    <div id='mobile-nav'>
      <div className='navs'>
        <MobileCollaborate />
        <Message />
        <MobileNotification />
        <MobileProfile />
      </div>
    </div>
  )
}

export default MobileNav

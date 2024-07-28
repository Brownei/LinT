/* eslint-disable react/prop-types */
import './MobileHeader.scss';
import { Badge, Button } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";
import { useGlobalContext } from '../../../context/GlobalContext';

const MobileHeader = ({ collaboratorPage, interests }) => {
  const location = useLocation()
  const { conversations } = useGlobalContext()

  return (
    <div id='mobile-header'>
      {collaboratorPage && (<h1>Collaborate</h1>)}
      <div className='buttons'>
        <div className="mobile-chats">
          <NavLink to={'/collaborate/interests'} className={location.pathname === '/collaborate/interests' ? 'active-link' : 'link'}>
            <Badge color="#00034A" size="xs" circle>{interests?.length}</Badge>
            Interest
          </NavLink>

          <NavLink to={'/messages'} className={location.pathname === '/messages' ? 'active-link' : 'link'}>
            <Badge color="#00034A" size="xs" circle>{conversations?.length}</Badge>
            Chats
          </NavLink>
        </div>

        {collaboratorPage && (
          <NavLink to={'/collaborate/create-post'}>
            <Button color="#0006B1" style={{ borderRadius: '8px', fontSize: '14px', fontWeight: '400' }}>Share your Idea</Button>
          </NavLink>
        )}
      </div>
    </div>
  )
}

export default MobileHeader

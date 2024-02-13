import './Pages.scss'
import { Routes, Route } from "react-router-dom";
import Collaborate from './CollaboratePage/Collaborate'
import Profile from './ProfilePage/Profile';
import Notifications from './NotificationsPage/Notifications';

const Pages = () => {
  return (
    <section className='pages'>
        <Routes>
            <Route path="/" element={<Collaborate />} />
            <Route path='/profile' element={<Profile />}/>
            <Route path='/notifications' element={<Notifications />}/>
        </Routes>
    </section>
  )
}

export default Pages;
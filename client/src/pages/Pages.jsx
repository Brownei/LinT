import './Pages.scss'
import { Routes, Route } from "react-router-dom";
import Collaborate from './CollaboratePage/Collaborate'
import Profile from './ProfilePage/Profile';
import Notifications from './NotificationsPage/Notifications';
import Login from './OnboardingPage/LoginPage/Login';
import Register from './OnboardingPage/RegisterPage/Register';
import Layout from '../components/Layout/Layout'
import SetupProfile from './OnboardingPage/SetupProfilePage/SetupProfile'

const Pages = () => {
  return (
    <section className='pages'>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Collaborate />} />
            <Route path='/profile' element={<Profile />}/>
            <Route path='/notifications' element={<Notifications />}/>
          </Route>

          <Route path='/login' element={<Login />}/>
          <Route path='/create-account' element={<Register />}/>
          <Route path='/setup-profile' element={<SetupProfile />}/>
        </Routes>
    </section>
  )
}

export default Pages;
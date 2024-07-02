import './Pages.scss'
import { Routes, Route } from "react-router-dom";
import Collaborate from './CollaboratePage/Collaborate'
import ProfilePage from './ProfilePage/ProfilePage';
import Notifications from './NotificationsPage/Notifications';
import Login from './OnboardingPage/LoginPage/Login';
import Register from './OnboardingPage/RegisterPage/Register';
import Layout from '../components/Layout/Layout'
import SetupProfile from './OnboardingPage/SetupProfilePage/SetupProfile'
import CreatePostPage from './CreatePostPage/CreatePostPage'
import ParticularCollaboratePage from './CollaboratePage/ParticularCollaboratePage/ParticularCollaboratePage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import { AuthWrapper } from '../components/AuthWrapper/AuthWrapper';
import EditProfilePage from './EditProfilePage/EditProfilePage';
import UserProfilePage from './UserProfilePage/UserProfilePage';
import MobileInterests from '../components/Mobile/MobileInterests/MobileInterests';
import MessagesPage from './MessagesPage/MessagesPage';

const Pages = () => {
  return (
    <section className='pages'>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path='profile' element={<ProfilePage />}/>
            <Route path='/notifications' element={<Notifications />}/>
            <Route path='/collaborate/:id' element={<ParticularCollaboratePage />}/>
            <Route path='/profile/edit' element={<EditProfilePage />}/>
            <Route path='/:username' element={<UserProfilePage />} />
            <Route path='collaborate/interests' element={<MobileInterests />}/>
            <Route path='/messages' element={<MessagesPage />}/>
          </Route>

          <Route element={<AuthWrapper />}>
            <Route path='/collaborate/create-post' element={<CreatePostPage />}/>
          </Route>

          <Route path='/setup-profile' element={<SetupProfile heading={'Set up your profile'}/>}/>
          <Route path='/' element={<Login />}/>
          <Route path='/create-account' element={<Register />}/>

          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    </section>
  )
}

export default Pages;

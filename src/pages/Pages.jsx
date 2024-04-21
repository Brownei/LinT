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
import { AppProvider } from '../components/Provider/AppProvider';
import { useLocation } from 'react-router-dom';
import SecondSetupPage from './OnboardingPage/SetupProfilePage/SecondSetup/SecondSetupPage';
import SetupConfirmPage from './OnboardingPage/SetupProfilePage/SetupConfirmPage/SetupConfirmPage';
import EditProfilePage from './EditProfilePage/EditProfilePage';

const Pages = () => {
  const location = useLocation()
  let heading;

  switch (location.pathname) {
    case '/setup-profile':
      heading = 'Set up your profile'
      break;
    case '/setup-profile/2':
      heading = 'Your bio and links'
      break;
    default:
      heading = 'Set up your profile'
      break;
  }

  return (
    <section className='pages'>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path='profile' element={<ProfilePage />}/>
            <Route path='/notifications' element={<Notifications />}/>
            <Route path='/collaborate/:id' element={<ParticularCollaboratePage />}/>
            <Route path='/profile/edit' element={<EditProfilePage />}/>
          </Route>

          <Route element={<AuthWrapper />}>
            <Route path='/collaborate/create-post' element={<CreatePostPage />}/>
            <Route element={<AppProvider />}>
              <Route path='/setup-profile' element={<SetupProfile heading={heading}/>}/>
              <Route path='/setup-profile/2' element={<SecondSetupPage heading={heading}/>}/>
              <Route path='/setup-profile/confirm' element={<SetupConfirmPage />}/>
            </Route>
          </Route>

          <Route path='/' element={<Login />}/>
          <Route path='/create-account' element={<Register />}/>

          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    </section>
  )
}

export default Pages;
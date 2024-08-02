import './Pages.scss'
import { useEffect, useCallback } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import Collaborate from './CollaboratePage/Collaborate'
import ProfilePage from './ProfilePage/ProfilePage';
import Notifications from './NotificationsPage/Notifications';
import Login from './OnboardingPage/LoginPage/Login';
import Register from './OnboardingPage/RegisterPage/Register';
import Layout from '../components/Layout/Layout'
import SetupProfile from './OnboardingPage/SetupProfilePage/SetupProfile'
import CreatePostPage from './CreatePostPage/CreatePostPage'
import ParticularCollaboratePage from './CollaboratePage/ParticularCollaboratePage/ParticularCollaboratePage';
import { AuthWrapper } from '../components/AuthWrapper/AuthWrapper';
import EditProfilePage from './EditProfilePage/EditProfilePage';
import UserProfilePage from './UserProfilePage/UserProfilePage';
import MobileInterests from '../components/Mobile/MobileInterests/MobileInterests';
import MessagesPage from './MessagesPage/MessagesPage';
import ParticularConversation from './ParticularConversation/ParticularConversation';
import { debounce } from 'lodash';

const Pages = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const token = sessionStorage.getItem('lint_session')

  const navigateProperly = useCallback(debounce((path) => {
    navigate(path, { replace: true })
  }, 300), [navigate]);

  useEffect(() => {
    if (
      !token &&
      location.pathname !== 'auth/login' &&
      location.pathname !== 'auth/create-account'
    ) {
      console.log('Bugging as hell 1')
      navigateProperly('/auth/login')
    };
  }, [token])

  useEffect(() => {
    if (token && location.pathname.startsWith('/auth')) {
      console.log('Bugging as hell 2')
      navigateProperly("/collaborate")
    };
  }, [token])


  return (
    <section className='pages'>
      <Routes location={location}>
        {token ? (
          <>
            <Route index element={<Navigate replace to={'collaborate'} />} />
            <Route path='/' element={<Layout />}>
              <Route path="collaborate" element={<Collaborate />} />
              <Route path='profile' element={<ProfilePage />} />
              <Route path='notifications' element={<Notifications />} />
              <Route path='collaborate/:id' element={<ParticularCollaboratePage />} />
              <Route path='profile/edit' element={<EditProfilePage />} />
              <Route path=':username' element={<UserProfilePage />} />
              <Route path='collaborate/interests' element={<MobileInterests />} />
              <Route path='messages' element={<MessagesPage />} />
            </Route>

            <Route element={<AuthWrapper />}>
              <Route path='messages/:id' element={<ParticularConversation />} />
              <Route path='collaborate/create-post' element={<CreatePostPage />} />
            </Route>
            <Route path='setup-profile' element={<SetupProfile heading={'Set up your profile'} />} />

          </>
        ) : (
          <>
            <Route path='/auth'>
              <Route path='create-account' element={<Register />} />
              <Route path='login' element={<Login />} />
            </Route>
          </>
        )}

      </Routes>
    </section>
  )
}

export default Pages;

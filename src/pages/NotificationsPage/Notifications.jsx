import { Link, useLocation } from 'react-router-dom';
import './Notifications.scss';
import FloatingIndicator from '../../components/FloatingIndicator/FloatingIndicator';
import { useAllNotifications } from '../../hooks/use-all-notifications';
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { ClipLoader } from 'react-spinners';
import { useMediaQuery } from 'react-responsive';

const Notifications = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 })
  const { notifications, setNotifications } = useGlobalContext()
  const { data: allNotifications, isLoading, error } = useAllNotifications()
  const location = useLocation();
  const routes = [
    {
      name: 'All',
      url: '/notifications'
    },
    {
      name: 'Unread',
      url: '/notifications?=unread'
    }
  ]

  useEffect(() => {
    if (allNotifications) {
      setNotifications(allNotifications)
    }
  }, [allNotifications])
  console.log(notifications.length === 0)

  return (
    <main id="notifications_page">
      <div className='notification-page'>
        <div className="h-container">
          <FloatingIndicator data={routes} />
        </div>
        {
          isLoading ? (
            <div className='notification-loading'>
              <ClipLoader color='#3338C1' size={isMobile ? 20 : 30} />
            </div>
          ) : error ? (
            <div>
              Might wanna refresh young blood
            </div>
          ) : (
            <div className='notifications'>
              {notifications.length === 0 ? (
                <p className='empty-state'>
                  You are that lonely?
                </p>
              ) : (
                <>
                  {notifications.map((notification) => (
                    <div className='particulare-notif'>
                      <img src={notification.sender.profileImage} />
                      <p>{notification.action === 'creatingRequest' ? `${notification.sender.fullName} is interested in your idea` : `${notification.sender.fullName} sent something`}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          )
        }
      </div >
    </main >
  );
}

export default Notifications;



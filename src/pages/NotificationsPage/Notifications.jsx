import { Link, useLocation } from 'react-router-dom';
import './Notifications.scss';

const Notifications = () => {
    const location = useLocation();

    return (
        <main id="notifications_page">
            <div className='notification-page'>
                <div className="h-container">
                    <Link to='/notifications' className={location.search === '' ? 'selected' : 'element'}>All</Link>
                    <Link to='/notifications?=unread' className={location.search === '?=unread' ? 'selected' : 'element'}>Unread</Link>
                </div> 
                <div className='notifications'>
                    <div className='particulare-notif'>
                        <h1>Brwosno</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit ipsa dolor possimus sequi nostrum, doloribus magnam temporibus. Explicabo, ad.</p>
                    </div>
                    <div className='particulare-notif'>
                        <h1>Brwosno</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit ipsa dolor possimus sequi nostrum, doloribus magnam temporibus. Explicabo, ad.</p>
                    </div>
                    <div className='particulare-notif'>
                        <h1>Brwosno</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit ipsa dolor possimus sequi nostrum, doloribus magnam temporibus. Explicabo, ad.</p>
                    </div>
                    <div className='particulare-notif'>
                        <h1>Brwosno</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit ipsa dolor possimus sequi nostrum, doloribus magnam temporibus. Explicabo, ad.</p>
                    </div>
                    <div className='particulare-notif'>
                        <h1>Brwosno</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit ipsa dolor possimus sequi nostrum, doloribus magnam temporibus. Explicabo, ad.</p>
                    </div>
                    <div className='particulare-notif'>
                        <h1>Brwosno</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit ipsa dolor possimus sequi nostrum, doloribus magnam temporibus. Explicabo, ad.</p>
                    </div>
                    <div className='particulare-notif'>
                        <h1>Brwosno</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit ipsa dolor possimus sequi nostrum, doloribus magnam temporibus. Explicabo, ad.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Notifications;



import { Link, useLocation } from 'react-router-dom';
import './Notifications.scss';

const Notifications = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);

    return (
        <div id="notifications_page">
            <div className="h-container">
                <Link to='/notifications' className={searchParams.has('params') === false? 'selected' : 'element'}>All</Link>
                <Link to='/notifications?params=unread' className={searchParams.get('params') === 'unread' ? 'selected' : 'element'}>Unread</Link>
            </div> 
            <div>
                <h1>Brwosno</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit ipsa dolor possimus sequi nostrum, doloribus magnam temporibus. Explicabo, ad.</p>
            </div>
        </div>
    );
}
 
export default Notifications;



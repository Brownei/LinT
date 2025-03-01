import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const Profile = () => {
    const [mouseEnter, setMouseEnter] = useState(false)
    const location = useLocation()
    return (
        <NavLink onMouseEnter={() => setMouseEnter(prev => !prev)} onMouseLeave={() => setMouseEnter(false)} to={'/profile'} className={location.pathname.includes(`/profile`) || mouseEnter ? 'nav_selected' : 'profile'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M12.6704 11.4609C13.4615 11.4609 14.2349 11.2263 14.8927 10.7868C15.5505 10.3473 16.0632 9.72258 16.3659 8.99167C16.6687 8.26077 16.7479 7.4565 16.5936 6.68058C16.4392 5.90465 16.0582 5.19192 15.4988 4.63251C14.9394 4.0731 14.2267 3.69214 13.4508 3.5378C12.6748 3.38346 11.8706 3.46267 11.1397 3.76542C10.4088 4.06817 9.78406 4.58086 9.34453 5.23866C8.90501 5.89645 8.67041 6.66981 8.67041 7.46094C8.67041 8.52181 9.09184 9.53922 9.84198 10.2894C10.5921 11.0395 11.6095 11.4609 12.6704 11.4609ZM18.6704 21.4609C18.9356 21.4609 19.19 21.3556 19.3775 21.168C19.5651 20.9805 19.6704 20.7262 19.6704 20.4609C19.6704 18.6044 18.9329 16.8239 17.6202 15.5112C16.3074 14.1984 14.5269 13.4609 12.6704 13.4609C10.8139 13.4609 9.03342 14.1984 7.72066 15.5112C6.40791 16.8239 5.67041 18.6044 5.67041 20.4609C5.67041 20.7262 5.77577 20.9805 5.9633 21.168C6.15084 21.3556 6.40519 21.4609 6.67041 21.4609H18.6704Z" fill={location.pathname.includes(`/profile`) || mouseEnter ? '#3338C1' : '#939393'}/>
            </svg>
            <span>Profile</span>
        </NavLink>
    )
}

export default Profile;
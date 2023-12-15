import { NavLink, useLocation } from "react-router-dom";

const Events = () => {
    const location = useLocation()
    return (
        <div>
            <NavLink to="/events" className={location.pathname === '/events' ? 'selected' : 'element'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none">
                    <path d="M10.74 12.7109L12 9.96094L13.25 12.7109L16 13.9609L13.25 15.2209L12 17.9609L10.74 15.2209L8 13.9609L10.74 12.7109ZM16 3.46094V1.46094H18V3.46094H19C19.53 3.46094 20.04 3.67094 20.41 4.05094C20.79 4.42094 21 4.93094 21 5.46094V19.4609C21 19.9909 20.79 20.5009 20.41 20.8709C20.04 21.2509 19.53 21.4609 19 21.4609H5C4.47 21.4609 3.96 21.2509 3.59 20.8709C3.21 20.5009 3 19.9909 3 19.4609V5.46094C3 4.93094 3.21 4.42094 3.59 4.05094C3.96 3.67094 4.47 3.46094 5 3.46094H6V1.46094H8V3.46094H16ZM5 8.46094V19.4609H19V8.46094H5Z" fill="#D9D9D9"/>
                </svg>
                <span>Events</span>
            </NavLink>
        </div>
    )
}

export default Events;




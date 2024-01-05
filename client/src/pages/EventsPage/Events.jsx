import "./Events.scss";
import { Link, useLocation } from 'react-router-dom';
import EventsCard from "../../components/EventsCard/EventsCard";
// import Scroll from "../../components/Scroll/Scroll";


const Events = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);

 
  const frames = [
    {
      name: "Esiti Brownson",
      time: "Thus, Oct 5, 2023, 10:00 am",
      location: "Lagos, NG",
      field: "React Hackathon",
    },
    {
      name: "Esiti Brownson",
      time: "Thus, Oct 5, 2023, 10:00 am",
      location: "Lagos, NG",
      field: "React Hackathon",
    },
    {
      name: "Esiti Brownson",
      time: "Thus, Oct 5, 2023, 10:00 am",
      location: "Lagos, NG",
      field: "React Hackathon",
    },
   
  ]    
    return ( 
        <div id="events_page">
          <h4>Events</h4>
            <div className="h-container">
                <Link to='/events' className={searchParams.has('params') === false? 'selected' : 'element'}>All</Link>
                <Link to='/events?params=online' className={searchParams.get('params') === 'online' ? 'selected' : 'element'}>Online</Link>
                <Link to='/events?params=offline' className={searchParams.get('params') === 'offline' ? 'selected' : 'element'}>Offline</Link>
                <Link to='/events?params=community' className={searchParams.get('params') === 'community' ? 'selected' : 'element'}>Community</Link>
                <Link to='/events?params=yourevents' className={searchParams.get('params') === 'yourevents' ? 'selected' : 'element'}>Your events</Link>
            </div> 

            <button className="create-event">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M11.24 12.25L12.5 9.5L13.75 12.25L16.5 13.5L13.75 14.76L12.5 17.5L11.24 14.76L8.5 13.5L11.24 12.25ZM16.5 3V1H18.5V3H19.5C20.03 3 20.54 3.21 20.91 3.59C21.29 3.96 21.5 4.47 21.5 5V19C21.5 19.53 21.29 20.04 20.91 20.41C20.54 20.79 20.03 21 19.5 21H5.5C4.97 21 4.46 20.79 4.09 20.41C3.71 20.04 3.5 19.53 3.5 19V5C3.5 4.47 3.71 3.96 4.09 3.59C4.46 3.21 4.97 3 5.5 3H6.5V1H8.5V3H16.5ZM5.5 8V19H19.5V8H5.5Z" fill="#0006B1"/>
              </svg>
              Create Event
            </button>

            <div className="top-events">
             <h3>Top Events</h3>
             <div className="top-events2">
              {frames.map((frames, index) => (
                <div key={index}>
                    <EventsCard index={index} frames={frames}/>
                </div>
              ))}
              </div>
            </div>

        </div>
    );
}
 
export default Events;
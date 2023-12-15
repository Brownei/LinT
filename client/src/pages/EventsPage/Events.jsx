import "./Events.scss";
import { Link, useLocation } from 'react-router-dom';
import EventsCard from "../../components/EventsCard/EventsCard";


const Events = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);

  const frames = [
    {
      name: "Hello React",
      time: "Thus, Oct 5, 2023, 10:00 am",
      location: "Lagos, NG",
      image: "https://www.figma.com/file/kpj75zK4lZ06RUKgtYFgXO/Lint?type=design&node-id=655-9575&mode=dev"
    },
    {
        name: "Hello React",
        time: "Thus, Oct 5, 2023, 10:00 am",
        location: "Lagos, NG",
        image: "https://www.figma.com/file/kpj75zK4lZ06RUKgtYFgXO/Lint?type=design&node-id=655-9575&mode=dev"
    },
    {
        name: "Hello React",
        time: "Thus, Oct 5, 2023, 10:00 am",
        location: "Lagos, NG",
        image: "https://www.figma.com/file/kpj75zK4lZ06RUKgtYFgXO/Lint?type=design&node-id=655-9575&mode=dev"
    },
    {
        "name": "Hello React",
        "time": "Thus, Oct 5, 2023, 10:00 am",
        "location": "Lagos, NG",
        "image": "https://www.figma.com/file/kpj75zK4lZ06RUKgtYFgXO/Lint?type=design&node-id=655-9575&mode=dev"
    },
    {
        "name": "Hello React",
        "time": "Thus, Oct 5, 2023, 10:00 am",
        "location": "Lagos, NG",
        "image": "https://www.figma.com/file/kpj75zK4lZ06RUKgtYFgXO/Lint?type=design&node-id=655-9575&mode=dev"
    },
    {
        "name": "Hello React",
        "time": "Thus, Oct 5, 2023, 10:00 am",
        "location": "Lagos, NG",
        "image": "https://www.figma.com/file/kpj75zK4lZ06RUKgtYFgXO/Lint?type=design&node-id=655-9575&mode=dev"
    },
  ]
    
    return ( 
        <div id="events_page">
            <div className="h-container">
                <Link to='/events' className={searchParams.has('params') === false? 'selected' : 'element'}>All</Link>
                <Link to='/events?params=online' className={searchParams.get('params') === 'online' ? 'selected' : 'element'}>Online</Link>
                <Link to='/events?params=offline' className={searchParams.get('params') === 'offline' ? 'selected' : 'element'}>Offline</Link>
                <Link to='/events?params=community' className={searchParams.get('params') === 'community' ? 'selected' : 'element'}>Community</Link>
                <Link to='/events?params=yourevents' className={searchParams.get('params') === 'yourevents' ? 'selected' : 'element'}>Your events</Link>
            </div> 

            <div>
              {frames.map((frames, index) => (
                <div key={index} >
                    <EventsCard index={index} frames={frames}/>
                </div>
              ))}
            </div>

            
            {/* {searchParams.has('params') === "" && (
            <div>
                {users.map((user, index) => (
                  <div key={index}>
                    <CardComponent user={user} />
                  </div>
                ))}
            </div>
          )} */}
        </div>
    );
}
 
export default Events;
import "./EventsCard.scss";
import cardpic from './cardpic.png';

const EventsCard = ({frames}) => {   

    return (
        <div className="eventcard" >
            <div className="eventpic">
               <img src={cardpic} />
            </div>
            <div className="event-details">
                <div className="time-pic">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M11.75 2.40625L14.25 4.40625M4.25 2.40625L1.75 4.40625M12.25 13.9062L13.25 14.9062M3.75 13.9062L2.75 14.9062M8.25 7.40625V9.90625L6.75 10.9062" stroke="#242727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 14.9062C10.8995 14.9062 13.25 12.5557 13.25 9.65625C13.25 6.75676 10.8995 4.40625 8 4.40625C5.10051 4.40625 2.75 6.75676 2.75 9.65625C2.75 12.5557 5.10051 14.9062 8 14.9062Z" stroke="#242727" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                   <p id="time">{frames.time}</p>
                </div>
                <div className="location-pic">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M7.99967 8.32161C7.55765 8.32161 7.13372 8.14602 6.82116 7.83346C6.5086 7.5209 6.33301 7.09698 6.33301 6.65495C6.33301 6.21292 6.5086 5.789 6.82116 5.47644C7.13372 5.16388 7.55765 4.98828 7.99967 4.98828C8.4417 4.98828 8.86562 5.16388 9.17819 5.47644C9.49075 5.789 9.66634 6.21292 9.66634 6.65495C9.66634 6.87382 9.62323 7.09054 9.53947 7.29275C9.45572 7.49496 9.33295 7.67869 9.17819 7.83346C9.02342 7.98822 8.83969 8.11099 8.63748 8.19475C8.43527 8.2785 8.21854 8.32161 7.99967 8.32161ZM7.99967 1.98828C6.762 1.98828 5.57501 2.47995 4.69984 3.35512C3.82467 4.23029 3.33301 5.41727 3.33301 6.65495C3.33301 10.1549 7.99967 15.3216 7.99967 15.3216C7.99967 15.3216 12.6663 10.1549 12.6663 6.65495C12.6663 5.41727 12.1747 4.23029 11.2995 3.35512C10.4243 2.47995 9.23735 1.98828 7.99967 1.98828Z" fill="#242727"/>
                    </svg>
                   <p id="location">{frames.location}</p>
                </div>
                <div>
                   <p id="field">{frames.field}</p>
                </div>
                <div>
                   <p id="name">{frames.name}</p><p>3,000 attendees</p>
                </div>
                
            </div>
        </div>
    );
}
 
export default EventsCard;

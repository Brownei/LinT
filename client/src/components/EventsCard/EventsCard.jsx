import "./EventsCard.scss";

const EventsCard = ({frames}) => {   

    return (
        <div className="eventcard" key={frames.name}>
            <div className="eventpic">
               <iframe src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fwork-environment&psig=AOvVaw2zMMfXQSTFhmd_Ic1wkig0&ust=1702663116098000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCID1tsTAj4MDFQAAAAAdAAAAABAa" title="You"/>
            </div>
            <div className="event-details">
               
            </div>
        </div>
    );
}
 
export default EventsCard;
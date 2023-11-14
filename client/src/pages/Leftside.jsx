import Profile from "./Profile";
import Notifications from "./Notifications";
import Saved from "./Saved";
import Events from "./Events";

const Leftside = () => {
    return (
        <div className="leftside">
            <div className="leftin">
                <Profile />
                <Notifications/>
                <Saved/>
                <Events/>
            </div>
        </div>
    )
}

export default Leftside;
import './LeftNav.scss'
import Profile from "./LeftNavComponents/Profile";
import Notifications from "./LeftNavComponents/Notifications";
import Saved from "./LeftNavComponents/Saved";
import Events from "./LeftNavComponents/Events";

const SideNav = () => {
    return (
        <div className="leftside">
            <div className="leftin">
                <Profile />
                <Notifications/>
                <Saved/>
                <Events/>
                <button>Post</button>
            </div>
        </div>
    )
}

export default SideNav;
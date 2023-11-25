import './LeftNav.scss'
import Profile from "./LeftNavComponents/Profile";
import Notifications from "./LeftNavComponents/Notifications";
import Saved from "./LeftNavComponents/Saved";
import Events from "./LeftNavComponents/Events";

const SideNav = () => {
    return (
        <aside className="leftside">
            <div className="leftin">
                <Profile />
                <Notifications/>
                <Saved/>
                <Events/>
                <button>Post</button>
            </div>
        </aside>
    )
}

export default SideNav;
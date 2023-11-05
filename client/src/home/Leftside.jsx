import React from "react";
import Profile from "../left/Profile";
import Notifications from "../left/Notifications";
import Saved from "../left/Saved";
import Events from "../left/Events";

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
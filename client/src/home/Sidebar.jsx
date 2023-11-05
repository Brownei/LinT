import React from "react";
import Ideas from "../side/Ideas";
import Topics from "../side/Topics";
import Follow from "../side/Follow";
import Search from "../side/Search";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="cont">
            <Search/>
            </div>
            <div className="flex">
            <Follow/>
            <Ideas/>
            <Topics/>
            </div>
        </div>
    )
}

export default Sidebar;
import Ideas from "../components/Ideas";
import Topics from "../components/Topics";
import Follow from "../components/Follow";
import Search from "../components/Search";

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
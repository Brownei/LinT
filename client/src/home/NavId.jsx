import Collaborate from "../nav/Collaborate";
import Community from "../nav/Community";
import Explore from "../nav/Explore";
import Home from "../nav/Home";
import Articles from "../nav/Articles";

const NavId = () => {
    return (
        <div className="navid">
            <div className="navbar">
                <Home/>
                <Explore/>
                <Collaborate/>
                <Community/>
                <Articles/>
            </div>
         </div>
    )
}

export default NavId;
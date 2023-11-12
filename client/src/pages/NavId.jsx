import Collaborate from "./Collaborate";
import Community from "./Community";
import Explore from "./Explore";
import Home from "./Home";
import Articles from "./Articles";

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
import './Nav.scss'
import Collaborate from "./NavComponents/Collaborate";
import Community from "./NavComponents/Community";
import Explore from "./NavComponents/Explore";
import Home from "./NavComponents/Home";
import Articles from "./NavComponents/Articles";
import Search from "./NavComponents/Search";

const Nav = () => {
    return (
        <nav id="navid">
            <div className="navbar">
                <p>LinT</p>
                <div className='nav_sections'>
                    <div className='nav'>
                        <Home/>
                        <Explore/>
                        <Collaborate/>
                        <Community/>
                        <Articles/>
                    </div>
                    <Search />
                </div>
            </div>
        </nav>
    )
}

export default Nav;
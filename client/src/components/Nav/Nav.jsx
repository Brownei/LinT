import './Nav.scss'
import Collaborate from "./NavComponents/Collaborate";
import Community from "./NavComponents/Community";
import Explore from "./NavComponents/Explore";
import Home from "./NavComponents/Home";
import Articles from "./NavComponents/Articles";
import Search from "./NavComponents/Search";

const Nav = () => {
    const articlesPathName = new URL("http://localhost:5173/articles") 
    const explorePathName = new URL("http://localhost:5173/explore") 
    const homePathName = new URL("http://localhost:5173") 

    console.log(homePathName.pathname, explorePathName.pathname, articlesPathName.pathname)
    return (
        <div id="navid">
            <div className="navbar">
                <p>LinT</p>
                <div className='nav_sections'>
                    <div className={homePathName.pathname === '/articles' ? 'nav_selected' : 'nav'}>
                        <Home/>
                        <Explore/>
                        <Collaborate/>
                        <Community/>
                        <Articles/>
                    </div>
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Nav;
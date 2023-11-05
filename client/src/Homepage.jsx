import './Homepage.scss';
//import search from "./home/search";
import Sidebar from './home/Sidebar';
import NavId from "./home/NavId";
//import Postarticle from "./home/Postarticle";
import Leftside from "./home/Leftside";
import Content from './Content';

const Homepage = () => {
    return (
        <div className="homepage">
            <div className="container">
                <Leftside/>
                <NavId/>
                <Sidebar/>
            </div>
            <Content />
        </div>
    )
}
export default Homepage;

    

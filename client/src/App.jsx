import './Homepage.scss';
//import search from "./home/search";
import Sidebar from './home/Sidebar';
import NavId from "./home/NavId";
//import Postarticle from "./home/Postarticle";
import Leftside from "./home/Leftside";
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

const App = () => {
    return (
        <div className="homepage">
            <div className="container">
              <BrowserRouter>
                <Leftside/>
                <NavId/>
                <Sidebar/>
                <Pages />
              </BrowserRouter>
            </div>
        </div>
    )
}
export default App;

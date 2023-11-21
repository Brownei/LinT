import './App.scss';
import LeftNav from './components/LeftNav/LeftNav'
import Nav from './components/Nav/Nav'
import RightNav from './components/RightNav/RightNav'
import Pages from './pages/Pages'



const App = () => {
    return (
        <div id="homepage">
          <div className="container">
                <LeftNav/>
                <Nav/>
                <RightNav/>
                <Pages />
            </div>
        </div>
    )
}
export default App;
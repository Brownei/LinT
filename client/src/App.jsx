import './Homepage.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from './pages/Articles';
import Homepage from './Homepage';
// import Home from './pages/Home';

const App = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Homepage/>} />
          <Route path='/articles' element={<Articles />} />  
        </Route>
      </Routes>
    </BrowserRouter>
    )
}
export default App;

//  <div className="homepage">
// <div className="container">
// <BrowserRouter>
//   <Leftside/>
//   <NavId/>
//   <Sidebar/>
//   <Home />
// </BrowserRouter>
// </div>
// </div>

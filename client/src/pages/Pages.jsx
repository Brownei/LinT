import './Pages.scss'
import ArticlesPage from "./ArticlesPage/ArticlesPage";
import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Explore from './ExplorePage/Explore'
import Collaborate from './CollaboratePage/Collaborate'
import Community from './CommunityPage/Community'
import Events from './EventsPage/Events';
// import Profile from './Pro/Events';
// import Saved from './EventsPage/Events';
// import Notifications from './EventsPage/Events';

const Pages = () => {
  return (
    <section className='pages'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path='/explore' element={<Explore />}/>
            <Route path='/collaborate' element={<Collaborate />}/>
            <Route path='/community' element={<Community />}/>
            <Route path='/events' element={<Events />}/>
            {/* <Route path='/saved' element={<Saved />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/notifications' element={<Notifications />}/> */}
        </Routes>
    </section>
  )
}

export default Pages;
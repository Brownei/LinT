import './Pages.scss'
import ArticlesPage from "./ArticlesPage/ArticlesPage";
import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import Explore from './ExplorePage/Explore'
import Collaborate from './CollaboratePage/Collaborate'
import Community from './CommunityPage/Community'

const Pages = () => {
  return (
    <section className='pages'>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path='/explore' element={<Explore />}/>
            <Route path='/collaborate' element={<Collaborate />}/>
            <Route path='/community' element={<Community />}/>
        </Routes>
    </section>
  )
}

export default Pages;
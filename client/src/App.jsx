import React from "react";
import './Homepage.scss';
import Scroll from "./components/Scroll";
import HomePage from "./pages/HomePage";
import Sidebar from "./pages/Sidebar";
import NavId from "./pages/NavId";
import Leftside from "./pages/Leftside";
import ArticlesPage from "./pages/ArticlesPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="homepage">
          <div className="container">
                <Leftside/>
                <NavId/>
                <Sidebar/>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/articlespage" element={<Scroll> <ArticlesPage /> </Scroll>} />
                </Routes>
            </div>
        </div>
    )
}
export default App;
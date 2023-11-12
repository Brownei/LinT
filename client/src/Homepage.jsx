import React from "react";
import './Homepage.scss';
// import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";
import NavId from "./pages/NavId";
import Leftside from "./pages/Leftside";
// import { Link } from "react-router-dom";
// import Articles from "./pages/Articles";
import ArticlesPage from "./pages/ArticlesPage";

const Homepage = () => {
    return (
        <div className="homepage">
          <div className="container">
                <Leftside/>
                <NavId/>
                <Sidebar/>
                <ArticlesPage />
            </div>
        </div>
    )
}
export default Homepage;

    
{/* <Routes>
          <Route element={<Content />} path="/"/>
          <Route element={<ArticlesPage />} path="/articles"/>
    </Routes> */}

    // <div className="homepage">
    //        <div className="container">
    //         <Leftside/>
    //         <NavId/>
    //         <Sidebar/>
    //         <Home />
    //        </div>
    //     </div>
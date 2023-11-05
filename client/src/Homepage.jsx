import React from "react";
import './Homepage.css';
//import search from "./home/search";
import Sidebar from "./home/sidebar";
import NavId from "./home/NavId";
//import Postarticle from "./home/Postarticle";
import Leftside from "./home/Leftside";

const Homepage = () => {
    return (
        <div className="homepage">
           <div className="container">
            <Leftside/>
            <NavId/>
            <Sidebar/>
           </div>
        </div>
    )
}
export default Homepage;

    

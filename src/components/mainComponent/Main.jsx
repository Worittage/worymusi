import React from "react";
import './main.css'
import Centerblock from "./centerblockComponent/Centerblock";
import Nav from "./navComponent/Nav";
import Sidebar from "./sidebarComponent/Sidebar";

const Main = () => {
    return(
        <main className="main">
              <Nav></Nav>
              <Centerblock></Centerblock>
             <Sidebar></Sidebar>
            </main>
    )
}
export default Main;
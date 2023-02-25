import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./NavbarComponent";
import Footer from "./Footer";

function Layout(){
    return(
        <div>
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    )
}
export default Layout;
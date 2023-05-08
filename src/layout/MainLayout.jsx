import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
       <>
            <Navbar />
            <Sidebar />
            <Outlet/>
            <Footer/>
        </>
    )
};

export default MainLayout;
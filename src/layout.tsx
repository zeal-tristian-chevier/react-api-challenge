import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet /> {/* This is where child routes will be rendered */}
            <Footer />
        </>
    );
};

export default Layout;
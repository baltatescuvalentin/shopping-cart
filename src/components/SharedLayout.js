import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './header/NavBar';

function SharedLayout() {

    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout;
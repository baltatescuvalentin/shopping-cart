import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './header/NavBar';

function SharedLayout({cart}) {

    return (
        <>
            <NavBar cart={cart}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout;
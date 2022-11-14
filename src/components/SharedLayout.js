import React from 'react';
import Footer from './Footer';
import NavBar from './header/NavBar';
import Main from './main/Main';
import SideNav from './main/SideNav';

function SharedLayout() {

    return (
        <>
            <NavBar />
            <Main />
            <Footer />
        </>
    )
}

export default SharedLayout;
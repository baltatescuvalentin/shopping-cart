import React from 'react';
import { Outlet } from 'react-router-dom';
import MobileMenu from '../utils/MobileMenu';
import Footer from './Footer';
import NavBar from './header/NavBar';
import SideNavMobile from './main/SideNavMobile';


function SharedLayout({cart}) {

    return (
        <>
          <NavBar cart={cart}/>
          <MobileMenu cart={cart}/>
          <SideNavMobile />
          <Outlet />
          <Footer />
        </>
    )
}

export default SharedLayout;
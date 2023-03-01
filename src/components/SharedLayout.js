import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';
import MobileMenu from '../utils/MobileMenu';
import Footer from './Footer';
import NavBar from './header/NavBar';
import SideNavMobile from './main/SideNavMobile';


function SharedLayout({cart}) {

    const { openSidebar } = useSidebar();

    useEffect(() => {
        const disableScroll = (event) => {
          event.preventDefault();
        };

        const body = document.getElementsByTagName('body')[0];
    
        // Disable scrolling on touch devices
        if(openSidebar === true) {
            body.addEventListener('touchmove', disableScroll, { passive: false });
        }
        return () => {
          // Re-enable scrolling when the component unmounts
          body.removeEventListener('touchmove', disableScroll);
        };
      }, [openSidebar]);

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
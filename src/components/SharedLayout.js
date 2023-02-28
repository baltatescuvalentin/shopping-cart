import React, { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '../contexts/SidebarContext';
import MobileMenu from '../utils/MobileMenu';
import Footer from './Footer';
import NavBar from './header/NavBar';

function SharedLayout({cart}) {

    // const targetRef = useRef(null);
    // const [isIntersecting, setIsIntersecting] = useState(false);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //       ([entry]) => {
    //         setIsIntersecting(entry.isIntersecting);
    //       },
    //       {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.9,
    //       }
    //     );
      
    //     if (targetRef.current) {
    //       observer.observe(targetRef.current);
    //     }
      
    //     // Clean up the observer
    //     return () => {
    //       observer.disconnect();
    //     };
    //   }, []);

    // console.log(isIntersecting);

    return (
        <>
            <SidebarProvider>
                <NavBar cart={cart}/>
                <MobileMenu />
                <Outlet />
                <Footer />
            </SidebarProvider>
        </>
    )
}

export default SharedLayout;
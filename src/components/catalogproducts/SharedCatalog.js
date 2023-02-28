import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../main/SideNav';
import styled from 'styled-components';
import { SidebarProvider } from '../../contexts/SidebarContext';
import SideNavMobile from '../main/SideNavMobile';

function SharedCatalog() {

    return (
            <StyledMain>
                    {/* <SideNavMobile /> */}
                    <SideNav />
                    <Outlet />
            </StyledMain>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledMain = styled.main`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    min-height: calc(100vh - 170px - 83px);
    ${'' /* background-color: red; */}
`;

export default SharedCatalog;
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../main/SideNav';
import styled from 'styled-components';

function SharedCatalog() {

    return (
            <StyledMain>
                <SideNav />
                <Outlet />
            </StyledMain>
    )
}

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 1fr 2fr;
    min-height: calc(100vh - 170px - 83px);
    ${'' /* background-color: red; */}
`;

export default SharedCatalog;
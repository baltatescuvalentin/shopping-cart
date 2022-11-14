import React from 'react';
import styled from 'styled-components';
import SideNav from './SideNav';

function Main() {

    return (
        <StyledMain>
            <SideNav />
        </StyledMain>
    )
}

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr;
    min-height: calc(100vh - 170px - 83px);
`;

export default Main;
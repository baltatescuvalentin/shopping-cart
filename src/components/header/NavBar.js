import React from 'react';
import styled from 'styled-components';
import Logo from '../../utils/Logo';
import Dropdown from './Dropdown';
import ShoppingCart from './ShoppingCart';


function NavBar() {


    return (
        <Header>
            <Logo />

            <StyledDiv>
                <Dropdown />
                <ShoppingCart />
            </StyledDiv>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgb(255,165,133);
    background: linear-gradient(267deg, rgba(255,165,133,1) 16%, rgba(255,237,160,1) 71%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    height: 170px;
    padding: 0 10%;
    z-index: 9;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-left: auto;
    gap: 100px;
`;


export default NavBar;
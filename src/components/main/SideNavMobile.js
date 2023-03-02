import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useSidebar } from '../../contexts/SidebarContext';


function SideNavMobile() {

    const {openSidebar, handleOpenSidebar} = useSidebar();

    const location = useLocation();
    const parts = location.pathname.split('/');

    return (
        <Wrapper>
            <StyledSideNav $open={openSidebar}>
                <XPosition>
                    <StyledX onClick={() => {
                        handleOpenSidebar();
                        console.log(openSidebar);
                    }}>
                        <FaTimes size={30} />
                    </StyledX>
                </XPosition>
                <StyledHome to='..'>Home</StyledHome>
                <ShopTitle>Shop</ShopTitle>
                <CurrentTitle>/{parts[parts.length - 1]}</CurrentTitle>
                <StyledUL>
                    <li>
                        <StyledLink onClick={handleOpenSidebar} to='../shopping-cart/catalog/upper-body'>Upper body</StyledLink>
                    </li>
                    <li>
                        <StyledLink onClick={handleOpenSidebar} to='../shopping-cart/catalog/lower-body'>Lower body</StyledLink>
                    </li>
                    <li>
                        <StyledLink onClick={handleOpenSidebar} to='../shopping-cart/catalog/accessories'>Accessories</StyledLink>
                    </li>
                </StyledUL>
            </StyledSideNav>
        </Wrapper>
    )
}



const StyledHome = styled(Link)`
    margin: 36px 2em 0 0;
    color: black;
    display: inline-block;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 28px;
    font-weight: 600;
`

const Wrapper = styled.div`
    display: none;
    width: 100vw;

    @media (max-width: 720px) {
        display: block;
    }
`

const StyledSideNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: ${props => props.$open ? '0' : '-150%'};
    top: 0;
    padding-top: 36px;
    height: 100%;
    background-color: whitesmoke;
    transition: left 0.5s linear;
`;

const XPosition = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 100vw;
`

const StyledX = styled.div`
    border-radius: 50%;
    &:hover {
        background-color: grey;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin-right: 24px;
`;

const StyledLink = styled(Link)`
    margin-top: 24px;
    display: inline-block;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const ShopTitle = styled.p`
    margin: 0;
    margin-top: 16px;
    font-size: 28px;
    font-weight: 600;
`;

const CurrentTitle = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 28px;
    text-align: center;
    white-space: wrap;
`;

const StyledUL = styled.ul`
    list-style: none;
    margin-top: 56px;
    li {
        & > * {
            margin: 36px 2em 0 12px;
            color: black;
        }
        font-size: 28px;
        font-weight: 600;
    }
`;

export default SideNavMobile;
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useSidebar } from '../../contexts/SidebarContext';


function SideNavMobile() {

    const {openSidebar, handleOpenSidebar} = useSidebar();

    const Wrapper = styled.div`
        display: ${openSidebar === true ? 'block' : 'hidden'};
        width: 350px;
    `

    const location = useLocation();
    const parts = location.pathname.split('/');

    return (
        <Wrapper>
            <XPosition>
                    <StyledX>
                        <FaTimes size={30} />
                    </StyledX>
            </XPosition>
            <StyledSideNav>
                <StyledHome to='..'>Home</StyledHome>
                <ShopTitle>Shop</ShopTitle>
                <CurrentTitle>/{parts[parts.length - 1]}</CurrentTitle>
                <StyledUL>
                    <li>
                        <StyledLink to='../catalog/upper-body'>Upper body</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='../catalog/lower-body'>Lower body</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='../catalog/accessories'>Accessories</StyledLink>
                    </li>
                </StyledUL>
            </StyledSideNav>
        </Wrapper>
    )
}



const StyledHome = styled(Link)`
    margin: 36px 2em 0 12px;
    color: black;
    display: inline-block;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    font-size: 36px;
    font-weight: 600;
    &:hover {
        cursor: pointer;
    }
    &:after {
        display:block;
        content: '';
        border-bottom: solid 6px #019fb6;  
        transform: scaleX(0);  
        transition: transform 250ms ease-in-out;
        transform-origin:  0% 150%;
    };
    &:hover::after {
        transform: scaleX(1);
    }
`

const XPosition = styled.div`
    position: aboslute;
    top: 35px;
    left: 90%;
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
`;

const StyledLink = styled(Link)`
    margin-top: 24px;
    display: inline-block;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const StyledSideNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${'' /* position: fixed; */}
    top: 10px;
    padding-top: 36px;
    margin-left: 12px;
    height: 100dvh;
`;

const ShopTitle = styled.p`
    margin: 0;
    margin-top: 42px;
    font-size: 36px;
    font-weight: 600;
    margin-left: -24px;
`;

const CurrentTitle = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 36px;
    text-align: center;
`;

const StyledUL = styled.ul`
    list-style: none;
    margin-top: 56px;
    li {
        & > * {
            margin: 36px 2em 0 12px;
            color: black;
        }
        font-size: 36px;
        font-weight: 600;
        &:hover {
            cursor: pointer;
        }
        &:after {
            display:block;
            content: '';
            border-bottom: solid 6px #019fb6;  
            transform: scaleX(0);  
            transition: transform 250ms ease-in-out;
            transform-origin:  0% 100%;
        };
        &:hover::after {
            transform: scaleX(1);
        }
    }
`;

export default SideNavMobile;
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

function SideNav() {

    const location = useLocation();
    const parts = location.pathname.split('/');

    return (
        <StyledSideNav>
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
    )
}

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
    position: sticky;
    top: 10px;
    padding-top: 36px;
    margin-left: 12px;
`;

const ShopTitle = styled.p`
    margin: 0;
    margin-top: 42px;
    font-size: 24px;
    font-weight: 600;
    margin-left: -24px;
`;

const CurrentTitle = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 56px;
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
        font-size: 30px;
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

export default SideNav;
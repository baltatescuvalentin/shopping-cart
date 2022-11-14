import React from 'react';
import styled from 'styled-components';

function SideNav() {

    return (
        <StyledSideNav>
            <ShopTitle>Shop/</ShopTitle>
            <CurrentTitle>Products</CurrentTitle>
            <StyledUL>
                <li>
                    <p>Upper body</p>
                </li>
                <li>
                    <p>Lower body</p>
                </li>
                <li>
                    <p>Accesories</p>
                </li>
            </StyledUL>
        </StyledSideNav>
    )
}

const StyledSideNav = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    padding-top: 36px;
    margin-left: 24px;
`;

const ShopTitle = styled.p`
    margin: 0;
    margin-top: 42px;
    font-size: 24px;
    font-weight: 400;
    margin-left: -24px;
`;

const CurrentTitle = styled.p`
    margin: 0;
    margin-left: 42px;
    font-weight: 600;
    font-size: 56px;
`;

const StyledUL = styled.ul`
    align-items: center;
    list-style: none;
    margin-top: 56px;
    gap: 24px;
    li {
        & > * {
            margin: 24px 2em 0 12px;
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
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Dropdown() {
    const [clicked, setClicked] = useState(false);


    function handleClick() {
        setClicked(c => !c);
    }

    return (
        <div onMouseEnter={handleClick} onMouseLeave={handleClick}>
            <DropdownBtn><ProductsLink to='catalog'>Products</ProductsLink></DropdownBtn>
            { clicked && 
                <StyledUL>
                    <li>
                        <StyledLink to='catalog/upper-body'>Upper body</StyledLink>
                        {/* <div onClick={() => navigateTo('upper-body')}>Upper body</div> */}
                    </li>
                    
                    <li>
                        <StyledLink to='catalog/lower-body'>Lower body</StyledLink>
                    </li>

                    <li>
                        <StyledLink to='catalog/accessories'>Accessories</StyledLink>
                    </li>
                </StyledUL>
            }
        </div>
    )
}

const ProductsLink = styled(Link)`
    margin-top: 8px;
    color: white;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    display: inline-block;
    margin-top: 8px;
    color: black;
    text-decoration: none;
`;

const DropdownBtn = styled.button`
    border: none;
    background-color: inherit;
    font-size: 32px;
    color: white;
    font-weight: 600;
    &:hover {
        cursor: pointer;
    }
    margin-bottom: 0;
`;

const StyledUL = styled.ul`
    position: absolute;
    z-index: 100;
    margin-top: 0px;
    list-style: none;
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 12px;
    padding: 8px 15px;
    transform: translateX(-15px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    li {
        font-size: 24px;
        text-align: center;
        & > * {
            margin: 0;
            margin-top: 12px;
            color: black;
        }
        &:hover {
            cursor: pointer;
        }
        &:after {
            display:block;
            content: '';
            border-bottom: solid 3px #019fb6;  
            transform: scaleX(0);  
            transition: transform 250ms ease-in-out;
            transform-origin:  0% 100%;
        };
        &:hover::after {
            transform: scaleX(1);
        }
    }
`;


export default Dropdown;
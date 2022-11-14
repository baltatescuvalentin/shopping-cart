import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

function Dropdown() {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(c => !c);
    }

    return (
        <div onMouseEnter={handleClick} onMouseLeave={handleClick}>
            <DropdownBtn>Products</DropdownBtn>
            { clicked && 
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
            }
        </div>
    )
}

const DropdownBtn = styled.button`
    border: none;
    background-color: inherit;
    font-size: 32px;
    color: white;
    &:hover {
        cursor: pointer;
    }
    margin-bottom: 0;
`;

const StyledUL = styled.ul`
    position: absolute;
    margin-top: 0;
    list-style: none;
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 12px;
    padding: 15px;
    transform: translateX(-15px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

    li {
        font-size: 24px;
        text-align: center;
        &:hover {
            cursor: pointer;
        }
    }
`;


export default Dropdown;
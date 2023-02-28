import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png';
import { useNavigate } from 'react-router-dom';

function Logo() {

    const navigator = useNavigate();

    return (
        <div onClick={() => navigator('../shopping-cart')}>
            <StyledDiv>
                <p>
                    eClothing
                </p>
            </StyledDiv>
            <StyledLogo />
        </div>
    )
}

const StyledLogo = styled.img`
    height: 96px;
    width: 180px;
    margin-left: 8px;

    @media (max-width: 720px) {
        height: 54px;
        width: 120px;
    }
`;

StyledLogo.defaultProps = {
    src: logo,
    alt: 'logo',
}

const StyledDiv = styled.div`
    position: absolute;
    z-index: 9;
    transform: translateY(85%);
    p {
        font-size: 56px;
        color: #808585;
        font-weight: 600;
        margin: 0;

        @media (max-width: 720px) {
            font-size: 36px;
        }
    }
`;

export default Logo;
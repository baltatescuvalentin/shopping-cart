import React from 'react';
import styled from 'styled-components';

function Logo() {

    return (
        <div>
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
`;

StyledLogo.defaultProps = {
    src: 'images/logo.png',
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
    }
`;

export default Logo;
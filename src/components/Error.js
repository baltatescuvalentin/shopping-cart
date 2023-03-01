import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Error() {

    return (
        <Wrapper>
            <Message>
                Oops! {':('}
            </Message>

            <Message>
                It seems like this page doesnt exist!
            </Message>

            <Link to='/'><ReturnBtn>Go to Home</ReturnBtn></Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    min-height: calc(100vh - 170px - 83px - 35px);
`;

const ReturnBtn = styled.button`
    border: none;
    border-radius: 16px;
    width: 200px;
    height: 96px;
    font-size: 32px;
    &:hover {
        cursor: pointer;
        transform: scale(1.03);
    }
    &:active, &:focus {
        transform: scale(0.97);
    }
`;

const Message = styled.p`
    font-size: 72px;
    margin: 12px;
    font-weight: 600;

    @media (max-width: 720px) {
        font-size: 36px;
    }
`;

export default Error;